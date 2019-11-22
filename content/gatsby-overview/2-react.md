---
title: "What is React?"
metaTitle: "What is React?"
metaDescription: "A very short intro to React"
---

Gatsby is built on top of React.

> React is a JavaScript library for building user interfaces

React is an open source project originally created by Facebook. On it's own it's
just a library, but when used with something like Gatsby it's really more of
a web development framework.

## React Makes Gatsby Dynamic

Because Gatsby is built on top of React, your website is not limited to just
static content. This is one of the things that really sets Gatsby apart from other
static site generators.

## React is Rehydrated on Page Load

Gatsby builds down to a static site, but once you go to a page, React is
rehydrated (or loaded). This means you have the full power of React when building
a Gatsby site. I would argue that you can (and likely should) use Gatsby anytime
you are building a React App. This gives you the optimizations of Gatsby while
still giving you the power of React.

## React lets you use JSX

JSX is sort of like a customized HTML structure. If you are familiar with writing
HTML, then JSX will be very easy for you to pick up.

The power of JSX is that it makes it easy to break your website down into
re-usable components. You can pass data into these components through `props`.

For instance, look at this simple line of HTML:

```html
<div class="content"></div>
```

This is just an HTML div element with the classname `content`.
Now let's look at some JSX.

```jsx
<Link to="/contact/">Contact</Link>
```

This is a Gatsby link component. The prop (similar to an HTML attribute) is
`to` and the value passed into the component is the string `/contact/`. Gatsby
uses this component to correctly link between pages on your site.

The cool thing is though, you can create your own components so you could
eventually have something like this with nested custom components.

```jsx
<Layout>
  <Hero title="My Site" image="hero.png" />
  <BlogTeaser title="Test Post" path="/test-post/" />
</Layout>
```

In this example you can see there is some type of `Layout` component and inside
it there is a `Hero` component and a `BlogTeaser` component. Each of these
components could have different props that are passed to them that will control
what and how they are displayed.

