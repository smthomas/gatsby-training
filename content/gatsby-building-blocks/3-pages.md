---
title: "Gatsby Pages"
metaTitle: "Gatsby Pages"
metaDescription: "Learn about Gatsby Pages"
---

Now **open up your code editor** and navigate to your `gatsby-training` project.

Take a look in the `src/pages` folder at the `index.js` file:

```javascript
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
  </Layout>
)

export default IndexPage
```

Here you can see a React component is created called `IndexPage`. You will see
some HTML markup, some JSX, and at the end the component is exported. ***This is IMPORTANT***.

All you need to do to create a new page in Gatsby is create a new `.js` file
in the `src/pages` directory that exports a React component. Take a look at
`page-2.js`. Notice how you can navigate to `http://localhost:8000/page-2` to
get to the second page. It gets the url path from the file without the `.js`
extension.

You will notice Gatsby's hot-reloading in action. You don't need to refresh the
page for your changes to take effect!

**CHALLENGE:** Create an `about` page on your Gatsby site with some HTML and make
sure you link it to the homepage so you can navigate back and forth between the
two pages.
