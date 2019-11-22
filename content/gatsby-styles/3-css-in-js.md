---
title: "CSS in JS"
metaTitle: "CSS in JS"
metaDescription: "An introduction to using CSS in JS with Gatsby"
---

> CSS-in-JS is a component-oriented styling approach. Most generally,
it is a pattern where CSS is composed inline using JavaScript.

Now you might be shaking your head and thinking "Didn't we stop using inline
styles years ago"? It's going to seem strange at first, and you might not like
it initially, but give it a chance before you write it off completely. I'm a
convert and you just might become one too if you spend a little time working
with it.

The main benefit of using CSS in JS is that because you are breaking your page
down into such small, re-usable components, it makes sense for the style of
those components to live with the actual definition of that component.

You may still need some global styles (for fonts, general colors/branding, etc),
however, each component should be able to live on it's own. This way if you add
a React component to a page, you know it will be styled correctly wherever it is
placed. CSS in JS fits this methodology perfectly.

There are two popular ways to implement CSS in JS (and again,
there might be some overlap between the two methods). One way is using `Emotion`
while the other way is to use `Styled Components`.

In the next section we are going to look into `Emotion` in more depth. Feel free
to check out the
[Styled Components Documentation](https://www.gatsbyjs.org/docs/styled-components/)
if you are interested in learning about that approach.
