const query = `{
  allMarkdownRemark(filter: { id: { regex: "//posts|pages//" } }) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        internal {
          content
        }
        frontmatter {
          title
          subTitle
          category
          status
          revision
          confidence
          importance
        }
      }
    }
  }
}`;

const queries = [
  {
    query,
    transformer: ({ data }) =>
      data.allMarkdownRemark.edges.map(({ node }) => node)
  }
];

module.exports = {
  resolve: `gatsby-plugin-algolia`,
  options: {
    appId: process.env.ALGOLIA_APP_ID ? process.env.ALGOLIA_APP_ID : "",
    apiKey: process.env.ALGOLIA_ADMIN_API_KEY
      ? process.env.ALGOLIA_ADMIN_API_KEY
      : "",
    indexName: process.env.ALGOLIA_INDEX_NAME
      ? process.env.ALGOLIA_INDEX_NAME
      : "",
    queries,
    chunkSize: 10000
  }
};
