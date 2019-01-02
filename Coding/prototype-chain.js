var doSomething = function () {}

doSomething.prototype.foo = 'bar';

var doSomeInstancing = new doSomething();

doSomeInstancing.prop = 'some value';

//console.log(doSomething.prototype);
console.log(doSomeInstancing.prop);
console.log(doSomeInstancing.foo);
