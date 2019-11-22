---
title: "JS Map Function"
metaTitle: "JS Map Function"
metaDescription: "Learn about the JS Map Function"
---

So this one really isn't new. However, it was pretty new to me as I never
had used it until I started working with Gatsby and React.

The map function is a way to loop through an array. However, it allows you to
do some different things and is a simpler syntax in a lot of ways. Take the code
below for example:

```javascript
let myArray = [9,5,7,2];

let doubleArray = myArray.map((val, i, arr) => {
  return val * 2;
});
```

After this `myArray` would stay the same, however, `doubleArray` would look like:

```javascript
[18,10,14,4]
```

You can also omit the `return` statement and just perform some action on each
element of the array.
