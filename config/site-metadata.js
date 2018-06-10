const { siteTitle, siteDescription, siteUrl, pathPrefix } = require("./meta");

module.exports = {
  title: siteTitle,
  description: siteDescription,
  siteUrl: siteUrl,
  pathPrefix: pathPrefix,
  algolia: {
    appId: process.env.ALGOLIA_APP_ID ? process.env.ALGOLIA_APP_ID : "",
    searchOnlyApiKey: process.env.ALGOLIA_SEARCH_ONLY_API_KEY
      ? process.env.ALGOLIA_SEARCH_ONLY_API_KEY
      : "",
    indexName: process.env.ALGOLIA_INDEX_NAME
      ? process.env.ALGOLIA_INDEX_NAME
      : ""
  },
  facebook: {
    appId: process.env.FB_APP_ID ? process.env.FB_APP_ID : ""
  }
};
