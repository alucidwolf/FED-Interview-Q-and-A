# Coding Answers:

*Question: What is the value of `foo`?*
```javascript
var foo = 10 + '20';
```

> "1020": via javascript auto type conversion

*Question: What will be the output of the code below?*
```javascript
console.log(0.1 + 0.2 == 0.3);
```

> False: do to how floating point numbers are stored, this results in a rounding error

*Question: How would you make this work?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

> By using a closure and currying
```javascript
function add(a, b) {
    var result = function (b) {
        return a + b;
    }
    if (typeof b === 'undefined') {
        return result;
    } else {
        return result(b);
    }
}

// es6
const add = (a, b) => {
    const result = (b) => a + b;
    if (typeof b === 'undefined')
        return result;
    return result(b);
}

// more concise
const add = (a, b) => (b || b === 'undefined') ? a + b : (b) => a + b;

console.log(add(2)(5));
console.log(add(2, 5));
```

*Question: What value is returned from the following statement?*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

> goh angasal a m'i: splits at the spaces into an array of strings, reveerse, then puts back together

*Question: What is the value of `window.foo`?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```

> bar: is this a trick question?

*Question: What is the outcome of the two alerts below?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

> First alert: Hello World

> Second alert: error because bar is not defined here, it is defined inside the scope of the IIFE

*Question: What is the value of `foo.length`?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

> 2: is this a test to see if I know that arrays are 0 indexed?

*Question: What is the value of `foo.x`?*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

> Undefined: seems like it should be 2

*Question: What does the following code print?*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four');
```

> one, four, three, two: logs happen before async, then the setTimeout pops off the stack last

*Question: What is the difference between these four promises?*
```javascript
doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```

> they are the same