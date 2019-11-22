---
title: "Async... Await"
metaTitle: "Async... Await"
metaDescription: "Learn about JS Async... Await"
---

`async... await` is a way to deal with promises. It's used when you don't know
when the function is going to return. This is commonly used with AJAX or API type
methods.

In Gatsby, you will see this often used around your GraphQL queries.

```javascript
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const articles = await graphql(`
    {
      allNodeArticle {
        nodes {
          id
          title
          path {
            alias
          }
        }
      }
    }
  `);

  articles.data.allNodeArticle.nodes.map(articleData =>
    createPage({
      path: articleData.path.alias,
      component: path.resolve(`src/templates/article.js`),
      context: {
        ArticleId: articleData.id,
      },
    })
  );
};
```

You can see this this example uses a lot of the things we just learned.

1. This is an arrow function that is getting assigned to `exports.createPages`
2. It's making use of `const` variable declarations.
3. In the parameter list of the function, you can see destructuring in action.
Rather than just accept a single object variable, it is getting destructured into
variables called `actions` and `graphql`. You could write that parameter section
like `(params)` and then call those parameters using `params.actions` and
`params.graphql` because that parameter is just an object getting passed into
the function.
4. You can see the function is declared to be an `async` function. You will also
notice the `await` keyword before the GraphQL query.
5. You can see a template string (template literal) is used around the
GraphQL query.
6. Last but not least, you can see the map function in action to loop through
all of the results of the GraphQL query and create Gatsby Pages.

This might look confusing now, but you will see this pattern over and over again
in your Gatsby sites.
