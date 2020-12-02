import React from "react";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import styles from "./blog.module.css";
import Layout from "../components/layout";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");

    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>Blog</div>
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list"></ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;
