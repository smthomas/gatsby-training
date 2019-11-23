---
title: "Building with Components"
metaTitle: "Building with Components"
metaDescription: "Learn how to break up a Gatsby page into components"
---

What exactly is a component? According to the Gatsby docs:

>A component is a building block for your site; It is a self-contained piece
of code that describes a section of UI (user interface)

If you come from the Drupal world, you can start to think of components as a mix
of regions, blocks, and paragraphs. You will use these components to piece
together your site.

## A Paradigm Shift

Because of this component based approach, your HTML, CSS, and JS is now much
tightly coupled than it was before. Where in the past, you would use CSS classes
on HTML elements similar to the markup below.

```html
<button class="primary-button">Click me</button>
```

Now you can use a React component to define and style this button:

```jsx
<PrimaryButton>Click me</PrimaryButton>
```

## Subcomponents

You will eventually want to break your pages up into smaller components. For
example, let's say you wanted to build a re-usable component called `Section`
that would just have a heading and a small bit of text underneath it. You would:

1. Create a file called `section.js` in the `src/components` folder (this is
where all your re-usable components live that are not page components).
2. Add the following to this file:

```javascript
import React from "react";

const Section = props => (
  <>
    <h2>{props.title}</h2>
    <p>{props.text}</p>
  </>
);

export default Section;
```

3. Now we add some sections to our About page (making sure we import our new
component at the top):

```javascript
  import React from "react"
  import { Link } from "gatsby"

  import Layout from "../components/layout"
  import SEO from "../components/seo"
+ import Section from "../components/section"

  const AboutPage = () => (
    <Layout>
      <SEO title="About me" />
      <h1>About Me</h1>
      <p>
        My name is Shane. I like Drupal, Gatsby, Guitars, and some other things.
      </p>
+     <Section title="Section 1" text="This is my first section" />
+     <Section title="Section 2" text="This is my second section" />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default AboutPage
```

We can use some destructuring here in our component to clean things up a bit.
In the `section.js` file, we can change the props variable:

```javascript
  import React from "react";

- const Section = props => (
+ const Section = ({ title, text}) => (
    <>
-     <h2>{props.title}</h2>
-     <p>{props.text}</p>
+     <h2>{title}</h2>
+     <p>{text}</p>
    </>
  );

  export default Section;
```

***A Note about Semicolons:*** You will see that you don't really need
semicolons anymore. I still use them out of habit, but it's really up to you.
I would just recommend being consistent with your decision throughout a project.
