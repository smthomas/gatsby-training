---
title: "Nested Layout Components"
metaTitle: "Nested Layout Components"
metaDescription: "Learn about Nested Layout Components in Gatsby"
---

Open up the `src/components/layout.js` file. This file creates a React component
called `Layout` that can be re-used through your pages. All you need to do to
use this is to wrap your component in a `<Layout>` tag (check out some of the
pages in the `src/pages` folder to see it in action).

Notice the following lines of code:

```javascript
const Layout = ({ children }) => {
```

```javascript
<main>{children}</main>
```

You can see `children` gets passed in as a prop and then displayed in the
component. This variable is anything that is between the opening and closing
`Layout` tags.

For example:

```javascript
<Layout>
  <p>This is a paragraph</p>
</Layout>
```

Would just drop in the paragraph markup in place of the `{children}` placeholder.

***CHALLENGE:** Now it's time for a real challenge! Complete the following:

1. This Layout component is using inline styles. Replace it with Emotion.
2. That `<footer>` section should really be it's own component.
Create a `Footer` component and use that in the layout (similar to the `Header` component).
3. If you have time see if you can create a new `Menu` component inside the
`Header` component.
4. If you have time replace the inline styles in the Header component with Emotion.
