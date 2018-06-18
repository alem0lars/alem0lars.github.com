const {
  siteMetadata,
  pluginAlgolia,
  pluginFilesystem,
  pluginRemark,
  pluginManifest,
  pluginGoogleAnalytics,
  pluginFeed
} = require("./config");

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    pluginAlgolia,
    pluginRemark,
    { resolve: `gatsby-plugin-sharp` },
    { resolve: `gatsby-transformer-sharp` },
    { resolve: `gatsby-plugin-react-helmet` },
    { resolve: `gatsby-plugin-catch-links` },
    pluginManifest,
    { resolve: `gatsby-plugin-offline` },
    pluginGoogleAnalytics,
    pluginFeed,
    { resolve: `gatsby-transformer-json` },
    { resolve: `gatsby-plugin-sitemap` },
    { resolve: `gatsby-plugin-svgr` }
  ].concat(pluginFilesystem)
};
