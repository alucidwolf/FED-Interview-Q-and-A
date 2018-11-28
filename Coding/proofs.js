//////////
// Closures are useful when:
// 1. Emulating privates variables or encapsulation
// 2. Making async server side calls
// 3. Creating block-scoped variables
//////////

// Simple Closure
function outside(num) {
    var remember = num;
    return function inside() {
        console.log(remember);
    }
}

var r1 = outside(7);
var r2 = outside(9);

r1();
r2();

//////////
// Closure
var bankAccount = function bankAccount(initialBalance) {
    // private variable ...
    var balance = initialBalance;

    return {
        getBalance: function () {
            // accessed from within
            return balance;
        },
        deposit: function (amount) {
            balance += amount;
            return balance;
        }
    }
}

var account = bankAccount(100);

account.getBalance();
account.deposit(10);

//////////
// Advanced Closure
var funcs = [];

var createFunction = function (val) {
    return function () {
        console.log('value: ' + val);
    }
}

for (var i = 0; i < 3; i++) {
    funcs[i] = createFunction(i)
}

for (var j = 0; j < 3; j++) {
    funcs[j]()
}

//////////
//////////
//////////

//////////
// https://codepen.io/alucidwolf/pen/rQJmdp?editors=1012
// Prototypal Inheritance

// create an object to be used like a class
var classObject = function () {
    console.log('very top, class object');
}

// add a method to the classObject
classObject.classMethod = function () {
    console.log('method on class object');
}

// create an instance of the classObject using 'new'
var anotherObject = new classObject();
anotherObject.classMethod = function () {
    console.log('i do just what is required');
}

console.log('call 1');
anotherObject.classMethod(); // call instance object method

console.log('call 2');
classObject.classMethod(); // call static object method

// declare prototype so all instances created will have the static method
classObject.prototype.classMethod = classObject.classMethod;

console.log('call 3');
anotherObject.classMethod(); // still calls the instance object method

var finalObject = new classObject();
finalObject.classMethod(); // this inherited the classObject method, classMethod