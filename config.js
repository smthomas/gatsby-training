const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "http://gatsby-training.codekarate.com",
    gaTrackingId: null
  },
  header: {
    logo: "http://codekarate.com/sites/all/themes/codekarate_neptune/logo.png",
    logoLink: "/",
    title: "Create Blazing Fast Websites with Gatsby and Drupal",
    githubUrl: "https://github.com/smthomas/gatsby-training",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: [
      "/introduction",
      "/gatsby-overview",
      "/modern-js",
      "/gatsby-install",
      "/gatsby-building-blocks",
      "/gatsby-styles",
      "/nested-layouts",
      "/gatsby-drupal",
      "/portfolio-challenge",
      "/netlify-deploy",
      "/bonus-lessons",
      "/thank-you"
    ],
    links: [
      { text: "Gatsby Docs", link: "https://www.gatsbyjs.org/docs/" },
      { text: "Code Karate", link: "https://codekarate.com" }
    ],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "Build Blazing Fast Websites with Gatsby and Drupal | Code Karate",
    description:
      "Learn how to build a GatsbyJS Website using Drupal from Code Karate",
    ogImage: null,
    docsLocation:
      "https://github.com/smthomas/gatsby-training/tree/master/content",
    favicon:
      "http://codekarate.com/sites/all/themes/codekarate_neptune/favicon.ico"
  }
};

module.exports = config;
