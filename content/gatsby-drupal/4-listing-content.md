---
title: "Create Lists of Content"
metaTitle: "Create Lists of Content"
metaDescription: "Learn about creating lists of content with Gatsby and Drupal"
---
import YoutubeEmbed from "../../src/YoutubeEmbed.js";

In Drupal, you typically use the Views module to create lists of content.
In Gatsby, you need to manually create those lists of content. However, it's
really not too difficult once you understand the general process.

<YoutubeEmbed link="https://www.youtube.com/embed/mu0T7Rae53c" />

## src/pages/articles.js

```javascript
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticlePreview from "../components/articlePreview";

const Articles = ({ data }) => {
  const articles = data.allNodeArticle.nodes;

  return (
    <Layout>
      <SEO title="Articles" />
      <h1>Articles</h1>
      {articles.map(article => (
        <ArticlePreview
          key={article.id}
          title={article.title}
          path={article.path.alias}
          image={article.relationships.field_image.localFile.childImageSharp.fluid}
          alt={article.field_image.alt}
          summary={article.body.summary ? article.body.summary : article.body.processed.substring(0, 300)}
        />
      ))}

    </Layout>
  );
}

Articles.propTypes = {
  data: PropTypes.object.isRequired,
};

export const data = graphql`
  {
    allNodeArticle(sort: {fields: created, order: DESC}) {
      nodes {
        title
        id
        body {
          summary
          processed
        }
        created
        field_image {
          alt
        }
        path {
          alias
        }
        relationships {
          field_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Articles;
```

## src/components/articlePreview.js

```javascript
import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";

const ArticlePreview = ({ title, path, image, alt, summary }) => (
  <div>
    <Link to={path}>
      <h2>{title}</h2>
    </Link>
    <Img fluid={image} alt={alt} />
    <div dangerouslySetInnerHTML={{__html: summary}} />
  </div>
);

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default ArticlePreview;
```
