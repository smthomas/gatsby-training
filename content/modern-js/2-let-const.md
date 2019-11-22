---
title: "Let and Const"
metaTitle: "Let and Const"
metaDescription: "Learn about the JS let and const variables"
---

You are probably familiar with declaring variables in JavaScript using a syntax
such as:

```javascript
var name = "Shane";
```

You can now declare variables using two new keywords `let` and `const`. The main
difference has to do with how scope works with these variables.

- `var` is function scoped
- `let` is block scoped

For instance, look at the code below using `var`.

```javascript
var myArray = [1,2,3];

for (var i = 0; i < myArray.length; i++) {
  var doubleNumber = myArray[i] * 2;
}

console.log(doubleNumber); // You would expect this to be undefined, but it's 6.
```

If we change `doubleNumber` to be defined using `let` you get a different result:

```javascript
var myArray = [1,2,3];

for (var i = 0; i < myArray.length; i++) {
  let doubleNumber = myArray[i] * 2;
}

console.log(doubleNumber); // Undefined.
```

`const` and `let` are almost exactly the same, except when you use `const` you
are saying that the value is not going to be redefined.

**Note:** If your `const` variable is an object, you can still change the
values of the object, but you can't reassign it to a different type.

I typically use `const` unless there is a specific reason to use `let`
(i.e. it's a primitive variable type that you will be changing). You should not
need to use `var`.
