import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import first from "lodash/first";
import map from "lodash/map";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";
import SimpleBlockComponent from "./SimpleBlockComponent";
import GridComponent from "./GridComponent";

const RootIndex = (props) => {
  const siteTitle = get(props, "data.site.siteMetadata.title");
  const paths = get(props, "data.allContentfulMainPage.edges");
  const page = first(paths);

  const renderComponent = (component) => {
    if (component.__typename === "ContentfulSimpleBlockComponent") {
      return <SimpleBlockComponent {...component} />;
    }
    if (component.__typename === "ContentfulGridComponent") {
      return <GridComponent {...component} />;
    }
    return component.__typename;
  };

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      {page.node.path}
      {map(page.node.references, renderComponent)}
    </Layout>
  );
};

export default RootIndex;

export const pageQuery = graphql`
  query PageQuery {
    allContentfulMainPage {
      edges {
        node {
          path
          references {
            ... on ContentfulSimpleBlockComponent {
              id
              __typename
              color
              header {
                raw
              }
            }
            ... on ContentfulGridComponent {
              id
              __typename
              images {
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
