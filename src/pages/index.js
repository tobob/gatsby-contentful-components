import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import first from "lodash/first";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const paths = get(this, "props.data.allContentfulMainPage.edges");
    const page = first(paths);
    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list"></ul>
            {page.node.path}
          </div>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query PageQuery {
    allContentfulMainPage {
      edges {
        node {
          path
        }
      }
    }
  }
`;
