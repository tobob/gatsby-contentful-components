const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const Page = path.resolve("./src/templates/page.js");
    resolve(
      graphql(
        `
          {
            allContentfulMainPage {
              edges {
                node {
                  path
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const pages = result.data.allContentfulMainPage.edges;
        pages.forEach((page) => {
          createPage({
            path: `/blog/${page.node.path}/`,
            component: Page,
            context: {
              slug: page.node.path,
            },
          });
        });
      })
    );
  });
};
