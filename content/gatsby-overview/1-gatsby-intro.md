---
title: "Gatsby Intro"
metaTitle: "Gatsby Intro"
metaDescription: "An introduction to Gatsby"
---

> Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps

So what exactly is Gatsby? Most people think of Gatsby as a static site
generator, however, it's much more than that.

> Gatsby is a framework for building progressive web applications

While Gatsby does build your site down to a static site, it isn't limited to just
static content. Gatsby is built on top of React (more on this later), which
makes it incredibly dynamic.

## Gatsby Documentation

Gatsby has some of the best documentation on the interwebs. Pieces of this
training have been pulled from Gatsby's fantastic documentation. I highly
recommend you take a look at the Gatsby documentation early and often.

[Gatsby Documentation](http://gatsbyjs.org/docs)

## Why Gatsby?

There are a lot of tools available for building websites and web apps, so why
should you choose Gatsby?

### Blazing Fast

Gatsby makes it easy to build an incredibly fast and well performing website.
For reference, check out the recently launched
[Third and Grove Website](http://thirdandgrove.com)
as it scores a perfect Lighthouse performance score!

When using a traditional CMS such as Drupal, you are adding tons of caching
layers to try to get your website as static as possible, where Gatsby is static
by default and then you can add layers of dynamic content or features as needed.

### Hosting is Easier

Since it's just static HTML, CSS, and JS, hosting is incredibly cheap. I know a
lot of well trafficked Gatsby sites that are hosted on free hosting tiers.

### Security

Because it's a static site, it's much more secure. You don't have to worry about
a user hacking into your database or compromising your admin user accounts. The
entire attack surface area is much smaller and therefore there is much less risk.

### Gatsby Images

Gatsby provides image optimizations out of the box. This means your images will
be able to take advantage of a nice blur-up effect where it first loads a lower
quality image and then later loads the full image. Check out that Third and Grove
site again and look at how the images load in.

### Intersection Observer

Part of the reason Gatsby seems so fast is that it is actually preloading the
next page before you even click the link to navigate there! Open up your Network
tab in your web developer tools in your Browser. Now scroll down a Gatsby site
and you will see network requests firing off. This makes using Gatsby feel like
you are using an app, not navigating a website.


### Progressive Web App and Offline Support

It's very easy to turn your Gatsby site into a PWA. Want your site visitors to be
able to access your site when they go offline, no problem, just turn on the
correct Gatsby plugin and you are good to go.

### Streamlined developmenet

Take advantage of development features such as hot-reloading which makes
developing a Gatsby site fun and intuitive.

### Gatsby Ecosystem & Community

Gatsby has a diverse open source system of plugins, starters, and themes. For
those of you coming from the Drupal world, it will feel strangely familiar. The
founder of Gatsby came from the Drupal world and in a lot of ways is building
a similar open source community. It's a very welcoming and friendly community to
be apart of.

## Gatsby Build Process

At a high level Gatsby takes the code you write and compiles it down to a static
website. This means your website needs to go through an initial build process.
During this build process you might pull content from various sources
(such as Drupal, Shopify, Markdown files, and more) to build your pages.
