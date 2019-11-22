---
title: "Plugins & Themes"
metaTitle: "Plugins & Themes"
metaDescription: "Learn about Gatsby Plugins and Themes"
---

Gatsby has an entire ecosystem on top of just Starters. This ecosystem includes
plugins and themes. There is often some confusion (and overlap) between these
items.

## Plugins

If you come from the Drupal or Wordpress world then Gatsby plugins are going to
seem similar to plugins in Wordpress or modules in Drupal. Plugins are Node.js
packages that implement Gatsby APIs. This will allow you to easily extend the
functionality of your Gatsby site.

For instance, you may want to add Google Tag manager or Google Analytics to your
Gatsby site. Simply download the correct plugin and add some configuration to your
`gatsby-config.js` file and you will be up and running.

Speaking of the `gatsby-config.js` file, open up that file and examine it's
contents.

```javascript
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
```

Here you can see a `plugins` array that is used to enable plugins on your Gatsby
site. The general process is to download the plugin (using `npm` or `yarn`) and
then enable and configure the plugin in this file. The documentation page
typically discloses the various configuration options and uses of the plugin.

You can view the [Plugins Docs](https://www.gatsbyjs.org/docs/plugins) or
[Browse the available Plugins](https://www.gatsbyjs.org/plugins/).

## Themes

A Gatsby theme is not equivalent to a theme in the Drupal or Wordpress world
(though there is somee overlap). A Gatsby theme is a prepackaged set of features.
A Gatsby theme can contain functionality, data sourcing, and UI elements.

Gatsby Themes are also meant to be able to be added on top of each other. For instance,
you might have a Gatsby theme that adds blog functionality on your site, and another
Gatsby theme that adds eCommerce functionality on your site. These themes can be used
alongside of each other to serve difference purposes.

### Shadowing

Shadowing is a cool feature that allows you to override a JS file from the theme
so you can modify it to fit your website needs. This is a similar concept to
overriding theme templates in a Drupal site.

[Gatsby Themes Docs](https://www.gatsbyjs.org/docs/themes/)
