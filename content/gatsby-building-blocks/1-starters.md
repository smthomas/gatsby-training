---
title: "Gatsby Starters"
metaTitle: "Gatsby Starters"
metaDescription: "Learn how to use Gatsby Starters to kick off a project"
---

A Gatsby starter is similar to a Drupal installation profile
(if you are familiar with Drupal). It's a way to start a project with a predefined
setup including content and configuration.

[View Available Gatsby Starters](https://www.gatsbyjs.org/starters/?v=2)

You can use a starter when creating a new project. Here is an example using the
Hello World starter:

```shell
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
```

The format is:

```shell
gatsby new [SITE_DIRECTORY_NAME] [URL_OF_STARTER_GITHUB_REPO]
```

If you don't add a starter, it will use the Gatsby default starter. This is what
we want to do.

1. Open up a terminal window
2. Create a folder for all your Gatsby projects and navigate to it
3. **Run the following command**

```shell
gatsby new gatsby-training
```

***Note:*** You don't have to call it `gatsby-training` if you would prefer a
different name.

Once it is finished, you will need to run the following commands:

```shell
cd gatsby-training
gatsby develop
```

The `gatsby develop` command starts your Gatsby development server.
Once it's loaded, you can navigate to `http://localhost:8000` to view your
Gatsby site using the default starter!
