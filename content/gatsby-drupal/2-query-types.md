---
title: "Query Types"
metaTitle: "Query Types"
metaDescription: "Learn about Page Queries and Static Queries"
---

> Gatsby handles three varieties of GraphQL queries: Page queries (sometimes
for simplicity referred to as “normal queries”), static queries using the
`<StaticQuery />` component, and static queries using the useStaticQuery hook.

Some things to consider:

- Page queries can only be run on top level page components
(in the `src/pages` folder)
- Page queries can accept variables
- Static queries (using the component or the hook) can't accept variables but
can be called from any component

[Read Gatsby Query Type Documentation](https://www.gatsbyjs.org/docs/static-vs-normal-queries/)
