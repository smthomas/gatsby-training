---
title: "Gatsby Link Component"
metaTitle: "Gatsby Link Component"
metaDescription: "An introduction to the Gatsby Link Component"
---

We have already seen how the Gatsby `<Link>` component can be used to link
between pages on your Gatsby site. It's important to use the Link component
for internal links so Gatsby can perform additional performance optimizations
(such as the intersection observer prefetching of pages).

If you are linking to a URL outside of your Gatsby site, you can just use a
standard `<a>` link.

As an example of the Gatsby Link component. Make sure you import the component
and then fill in the `to` prop with the correct internal path.

```javascript
import React from "react"
import { Link } from "gatsby"
export default () => (
  <div>
    <Link to="/contact/">Contact</Link>
  </div>
)
```

**CHECKPOINT:** You can check out the `building_blocks` branch to view the code
at this point.
