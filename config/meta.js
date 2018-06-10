const lightColors = require("../src/styles/light-colors");

module.exports = {
  siteTitle: "alem0lars website & blog", // <title>
  shortSiteTitle: "alem0lars website & blog", // <title> ending for posts and pages
  siteDescription:
    "Personal website & blog of Alessandro Molari, featuring current state of his CyberSecurity research, related news and activities",
  siteUrl: "https://alessandro.molari.me",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Alessandro Molari",
  authorTwitterAccount: "alem0lars",
  // info
  infoTitle: "alem0lars",
  infoTitleNote: "website & blog",
  // manifest.json
  manifestName: "Personal website & blog of Alessandro Molari",
  manifestShortName: "alem0lars blog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: lightColors.background,
  manifestThemeColor: lightColors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "molari.alessandro@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", title: "Github", url: "https://github.com/alem0lars" },
    {
      name: "linkedin",
      title: "LinkedIN",
      url: "https://linkedin.com/alem0lars"
    },
    { name: "twitter", title: "Twitter", url: "https://twitter.com/alem0lars" },
    {
      name: "facebook",
      title: "Facebook",
      url: "https://facebook.com/alem0lars"
    },
    {
      name: "instagram",
      title: "Instagram",
      url: "https://instagram.com/alem0lars"
    }
  ],
  builtWith: [
    { name: "gentoo", title: "Gentoo Linux", url: "https://gentoo.org" },
    { name: "xmonad", title: "XMonad WM", url: "https://xmonad.org" },
    { name: "vim", title: "Vim", url: "https://www.vim.org" }
  ]
};
