---
title: "Gatsby Source Drupal"
metaTitle: "Gatsby Source Drupal"
metaDescription: "Learn about Gatsby Source Drupal"
---
import YoutubeEmbed from "../../src/YoutubeEmbed.js";

In this lesson, you will install and configure the `gatsby-source-drupal`
plugin. You will connect your Gatsby site to your Drupal site and pull in some
articles.

<YoutubeEmbed link="https://www.youtube.com/embed/f1COKaro9o8" />

## gatsby-node.js

```javascript
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const articles = await graphql(`
    {
      allNodeArticle {
        nodes {
          id
          title
          path {
            alias
          }
        }
      }
    }
  `);

  articles.data.allNodeArticle.nodes.map(articleData =>
    createPage({
      path: articleData.path.alias,
      component: path.resolve(`src/templates/article.js`),
      context: {
        ArticleId: articleData.id,
      },
    })
  );
}
```

## src/templates/article.js
```javascript
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const Article = ({ data }) => {
  const post = data.nodeArticle;

  return (
    <Layout>
      <h1>{post.title}</h1>
      <img
        src={post.relationships.field_image.localFile.publicURL}
        alt={post.field_image.alt}
      />
      <div dangerouslySetInnerHTML={{ __html: post.body.processed }}
      />
    </Layout>
  );
};

Article.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($ArticleId: String!) {
    nodeArticle(id: { eq: $ArticleId }) {
      id
      title
      body {
        processed
      }
      field_image {
        alt
      }
      relationships {
        field_image {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`;

export default Article;
```
