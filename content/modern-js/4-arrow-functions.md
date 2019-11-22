---
title: "Arrow Functions"
metaTitle: "Arrow Functions"
metaDescription: "Learn about JS Arrow Functions"
---

You may already be familiar with arrow functions, but if you are not, they are
not as scary as they look or sound. They are just a different way of writing a
JavaScript function. The syntax is a bit more condensed and it's typically the
way you will see functions written in Gatsby or React projects.

You may be familiar with a Javascript function such as:

```javascript
var multiplyMe = function(x, y) {
  return x * y;
};
```

Now you can write this same function using the arrow function syntax.

```javascript
const multiplyMe = (x, y) => {
  return x * y
};
```

You can actually simplify it a bit more if you want. If all you are doing is
returning a single expression, you can write the same function like this:

```javascript
const multiplyMe = (x, y) => (x * y);
```

Or you can take it a bit further and drop the parenthesis:

```javascript
const multiplyMe = (x, y) => x * y;
```

Just keep in mind that all these versions do the exact same thing. It may seem
confusing at first but just keep in mind that at the end of the day, it's just
a function.

If you don't have any parameters, you can write the function like:

```javascript
const myFunction = () => {
  // Do stuff.
}
```

If you only have one parameter you can omit the parenthesis:

```javascript
const myFunction = props => {
  // Do stuff with my props parameter!
}
```

When working on Gatsby sites you may see different versions of this. Just
keep in mind that most of your JavaScript filse are simply exporting React
components, which are just functions. As you can see above, the syntax for how
the function is created might look a little different, but they are still just
functions.
