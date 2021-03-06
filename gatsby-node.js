const webpack = require("webpack");
const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);
const { store } = require(`./node_modules/gatsby/dist/redux`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    const separatorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0;
    const shortSlugStart = separatorIndex ? separatorIndex + 2 : 0;
    createNodeField({
      node,
      name: `slug`,
      value: `${separatorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`
    });
    createNodeField({
      node,
      name: `prefix`,
      value: separatorIndex ? slug.substring(1, separatorIndex) : ""
    });
  }
};

function createMarkdownPages(graphql, createPage) {
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve("./src/templates/PostTemplate.js");
    const pageTemplate = path.resolve("./src/templates/PageTemplate.js");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: { id: { regex: "//posts|pages//" } }
              limit: 1000
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                    prefix
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create posts and pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          const slug = edge.node.fields.slug;
          const isPost = /posts/.test(edge.node.id);

          createPage({
            path: slug,
            component: isPost ? postTemplate : pageTemplate,
            context: {
              slug: slug
            }
          });
        });
      })
    );
  });
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return Promise.all([createMarkdownPages(graphql, createPage)]);
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "build-javascript":
      {
        let components = store
          .getState()
          .pages.map(page => page.componentChunkName);
        components = _.uniq(components);
        config.plugin(
          "CommonsChunkPlugin",
          webpack.optimize.CommonsChunkPlugin,
          [
            {
              name: `commons`,
              chunks: [`app`, ...components],
              minChunks: (module, count) => {
                const vendorModuleList = []; // [`material-ui`, `lodash`];
                const isFramework = _.some(
                  vendorModuleList.map(vendor => {
                    const regex = new RegExp(
                      `[\\\\/]node_modules[\\\\/]${vendor}[\\\\/].*`,
                      `i`
                    );
                    return regex.test(module.resource);
                  })
                );
                return isFramework || count > 1;
              }
            }
          ]
        );
      }
      break;
  }
  return config;
};

exports.modifyBabelrc = ({ babelrc }) => {
  return {
    ...babelrc,
    plugins: babelrc.plugins.concat([
      `syntax-dynamic-import`,
      `dynamic-import-webpack`
    ])
  };
};
