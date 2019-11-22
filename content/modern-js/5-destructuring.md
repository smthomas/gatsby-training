---
title: "Destructuring"
metaTitle: "Destructuring"
metaDescription: "Learn about JS Destructuring"
---

> The destructuring assignment syntax is a JavaScript expression that
makes it possible to unpack values from arrays, or properties from objects,
into distinct variables.

This is very powerful as it gives you incredibly flexibility in dealing with
variables in your JavaScript code. It's also incredibly frustrating when you
are just learning it and can't figure out how the read the sometimes confusing
syntax!

Below are some examples of destructuring. For more detailed information,
[Read the docs on the Mozilla developer site](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

```javascript
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```
