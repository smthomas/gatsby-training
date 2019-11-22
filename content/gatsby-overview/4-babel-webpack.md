---
title: "Babel & Webpack"
metaTitle: "Babel & Webpack"
metaDescription: "A quick intro to Babel and Webpack"
---

## Babel

Gatsby uses Babel to allow you to utilize the newest Javascript features.

> Babel is a free and open-source JavaScript compiler that is mainly used to
convert ECMAScript 2015+ code into a backwards compatible version of JavaScript
that can be run by older JavaScript engines. Babel is popular tool for using
the newest features of the JavaScript programming language.

Babel will compile your code down during the Gatsby build process so you don't
have to worry about cross browser support, you just write your JS and Babel
will make sure it works.

You do have the ability to customize the Babel config within Gatsby, but the
defaults are typically a good starting spot.

## Webpack

Gatsby uses Webpack to bundle all your JS together at build time.

> Webpack is an open-source JavaScript module bundler. It is a module bundler
primarily for JavaScript, but it can transform front-end assets like HTML,
CSS, and images if the corresponding loaders are included. Webpack takes
modules with dependencies and generates static assets representing those modules.

Gatsby comes with its own Webpack config but gives you the ability to override it.
Webpack configuration has taken the sanity from many brave developers, so not
having to deal with setting up the default conifiguration is a huge time
(and sanity) saver.
