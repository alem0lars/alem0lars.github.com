// Load environment variables from .env
require("dotenv").config();

module.exports.siteMetadata = require("./site-metadata");
module.exports.pluginAlgolia = require("./plugin-algolia");
module.exports.pluginFilesystem = require("./plugin-filesystem");
module.exports.pluginRemark = require("./plugin-remark");
module.exports.pluginManifest = require("./plugin-manifest");
module.exports.pluginGoogleAnalytics = require("./plugin-google-analytics");
module.exports.pluginFeed = require("./plugin-feed");
