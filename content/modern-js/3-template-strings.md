---
title: "Template Strings (Interpolated Literals)"
metaTitle: "Template Strings (Interpolated Literals)"
metaDescription: "Learn about the JS Template Strings"
---

> Template literals are string literals allowing embedded expressions.
You can use multi-line strings and string interpolation features with them.

Template literals are enclosed by back-tick characters \` \` and can contain
expressions by wrapping the expression in curly braces and preceding it with a
dollar sign `${}`

This allows you to add JavaScript expressions directly into your strings. This
is much simpler than haveing to do:

```javascript
var name = "Shane";
console.log("Hello, my name is " + name + " and I like Gatsby");
```

Now you can do this:

```javascript
var name = "Shane";
console.log(`Hello, my name is ${name} and I like Gatsby`);
```

Now imagine you didn't know if the `name` variable was going to have a value.
Instead of writing a multiple line if statement, you can do something like:

```javascript
var name = null;
console.log(`Hello, my name is ${name ? name : 'nameless'} and I like Gatsby`);
```

Or you can do Math:

```javascript
console.log(`Two plus Two is ${2+2}`);
```

As you can see, this feature is pretty useful!
