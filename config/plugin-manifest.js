const {
  manifestName,
  manifestShortName,
  manifestStartUrl,
  manifestBackgroundColor,
  manifestThemeColor,
  manifestDisplay
} = require("./meta");

module.exports = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: manifestName,
    short_name: manifestShortName,
    start_url: manifestStartUrl,
    background_color: manifestBackgroundColor,
    theme_color: manifestThemeColor,
    display: manifestDisplay,
    icons: [
      {
        src: "/icons/icon-48x48.png",
        sizes: "48x48",
        type: "image/png"
      },
      {
        src: "/icons/icon-96x96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        src: "/icons/icon-144x144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icons/icon-256x256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png"
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }
};
