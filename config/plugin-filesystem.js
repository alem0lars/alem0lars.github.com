const path = require("path");

module.exports = ["posts", "pages", "parts"].map(name => ({
  resolve: `gatsby-source-filesystem`,
  options: {
    path: path.join(path.dirname(__dirname), "content", name),
    name
  }
}));
