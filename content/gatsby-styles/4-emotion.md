---
title: "Emotion"
metaTitle: "Emotion"
metaDescription: "An introduction to Emotion with Gatsby"
---

Emotion is a popular CSS-in-JS library that allows you to build and style
your components in a flexible and performant way.

Download the necessary Emotion plugins:

```bash
npm install --save gatsby-plugin-emotion @emotion/core @emotion/styled
```

Then add the plugin to your `gatsby-config.js` file:

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
    `gatsby-plugin-sass`,
+   `gatsby-plugin-emotion`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
```

There are two methods for using Emotion to style your components.

## Using Emotion Styled Components

```javascript
import React from "react";
import styled from "@emotion/styled"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Section = ({ title, text}) => (
  <Container>
    <h2>{title}</h2>
    <p>{text}</p>
  </Container>
);

export default Section;
```

## Using Emotion CSS Prop

You could do the same thing using the following code:

```javascript
import React from "react";
import { css } from "@emotion/core"

const container = css`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Section = ({ title, text}) => (
  <div css={container}>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

export default Section;
```

## There is a lot more to learn about Emotion

This really only scratches the surface of what Emotion is capable of. You may
need global styles, you are going to need media queries, and Emotion can do all
of it. Here are some resources for when you are ready to really start diving in:

- [Gatsby Emotion Docs](https://www.gatsbyjs.org/docs/emotion/)
- [Emotion Introduction](https://emotion.sh/docs/introduction)
- You can see how we used Emotion on the [thirdandgrove.com](http://thirdandgrove.com)
site by checking out our
[Third And Grove Gatsby Repo](https://github.com/thirdandgrove/thirdandgrove-com-gatsby)

**CHECKPOINT:** You can check out the `gatsby_styles` branch to get to the repo at this point.
