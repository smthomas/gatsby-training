---
title: "CSS and SASS"
metaTitle: "CSS and SASS"
metaDescription: "An introduction to using CSS and SASS with Gatsby"
---

## CSS

The first way to style a Gatsby site is to use a CSS stylesheet. Our current
project already has a CSS stylesheet with quite a few styles implemented.

Open the `layout.css` file inside `src/components` to see the current CSS being
applied to your site.

The next question is how is this CSS getting added to your Gatsby site? The
answer lies in the `layout.js` file in `src/components`. Don't worry too much
about what this `Layout` component is doing yet, but just focus on the import
statement at the top:

```javascript
import "./layout.css"
```

This will only add this CSS to pages that are using this `Layout` component. If
we wanted to make sure the CSS applied to all pages, we could add this same
import line to the `gatsby-browser.js` file in the root of the project.

The `gatsby-browser.js` file is a special file that allows Gatsby to interact with
the browser through various API's. You can read more about the
[Browser APIs](https://www.gatsbyjs.org/docs/browser-apis/).

## SASS

You may be more comfortable with SASS. Gatsby can work with that as well.
Start by shutting down your Gatsby development server and adding a new plugin.

```bash
npm install --save node-sass gatsby-plugin-sass
```

Inside your `gatsby-config.js` file add the line to enable the plugin:

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
+   'gatsby-plugin-sass',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
```

**Note:** This plugin can be added anywhere in the plugins array
(the order does not matter).

You can now add your a SASS file the same way you added a CSS file. Let's create
a global sass file. Start by creating a folder called `sass` in the
`src/` folder. Next create a `styles.scss` file in that new folder.

Now inside `gatsby-browser.js` import your SASS file as shown below:

```javascript
import("./src/sass/styles.scss");
```

Feel free to add any SASS you want in this SASS file. It will automatically
compile the SASS as long as the Gatsby development server is running.

**CHALLENGE:** Using either SASS or CSS modify some of the site styles. You may
decide to move some (or all of the CSS) to your SASS file. Don't spend too much
time on this though as we still have other types of styles to explore.

**Note:** You may notice there are some inline styles in some components that
might make it difficult to style everything you want. We will discuss these
issues soon.
