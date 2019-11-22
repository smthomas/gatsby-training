---
title: "What is GraphQL"
metaTitle: "What is GraphQL"
metaDescription: "Learn about and experiment with GraphQL"
---

> GraphQL is a query language for your API

You are probably familiar with SQL, which is a query language for your databases.
GraphQL is a query language for your APIs. This means you can query various
APIs using the same syntax. You can even query across multiple APIs in the
same GraphQL query. In the background GraphQL will take your query, make the
necessary API calls (based on the GraphQL schema) and then give you the results
in the expected JSON format.

## What does it look like

The general format of GraphQL typically looks something like this:

```graphql
query MyQuery {
  allNodeArticle {
    nodes {
      title
      body {
        processed
      }
    }
  }
}
```

In this query I am looking for the title and body text of all the Articles
on a Drupal site.

## Enough talk, let's try it out

GraphQL comes with a tool called GraphiQL that helps you structure your GraphQL queries correctly. GraphiQL is an Integrated Development Environment (IDE) that runs in your browser and lets you easily query your API data.

Choose your own adventure below to test out some GraphQL:

[Click here if you like Star Wars](https://graphiql.graphcms.com/simple/v1/swapi)

[Click here if you like Dogs](https://dog-graphql-api.glitch.me/)

If you don't like either, you will have to go ahead and pick one!

