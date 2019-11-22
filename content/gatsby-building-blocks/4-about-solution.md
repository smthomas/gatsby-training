---
title: "About Page Solution"
metaTitle: "About Page Solution"
metaDescription: "An example solution for creating an about page"
---

Create an `about.js` page in the `src/pages` folder with the following contents:

```javascript
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About me" />
    <h1>About Me</h1>
    <p>My name is Shane. I like Drupal, Gatsby, Guitars, and some other things.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
```

Finally, in the `index.js` file make add a link to your page:

```javascript
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
+   <br />
+   <Link to="/about/">About Me</Link>
  </Layout>
)
```
