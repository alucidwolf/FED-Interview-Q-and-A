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

//////////
//////////
//////////

//////////
// https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns
// Design Patterns
//////////

// First Class Functions
function performOperation(a, b, cb) {
    var c = a + b;
    cb(c);
}

performOperation(2, 3, function (result) {
    console.log('result of operation is: ' + result);
});

// Common ways to create object and add key:value pairs
var instance1 = {};
var instance2 = Object.create.apply(Object.prototype);
var instance3 = new Object();

instance1.key = 'value for key';
instance2["key"] = 'value for key';

// es5
Object.defineProperty(instance3, "key", {
    value: 'value for key',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperties(instance3, {
    "firstKey": {
        value: 'value for first key',
        writable: true
    },
    "secondKey": {
        value: 'value for second key',
        writable: false
    }
});

// Constructor Pattern
// Example 1, still can do better as each new Person duplicates the writesCode function
function Person(name, age, isDeveloper) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper || false;

    this.writesCode = function () {
        console.log(this.isDeveloper ? "yes" : "no");
    }
}

var person1 = new Person("Bob", 38, true);
var person2 = new Person("Alice", 24);

person1.writesCode(); // yes
person2.writesCode(); // no

// Example 2, extend the function's prototype instead of defining inside constructor function
function PersonBetter(name, age, isDeveloper) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper || false;
}

PersonBetter.prototype.writesCode = function () {
    console.log(this.isDeveloper ? "yes" : "no");
}

var personBetter1 = new PersonBetter("Bob", 38, true);
var personBetter2 = new PersonBetter("Alice", 24);

personBetter1.writesCode(); // yes
personBetter2.writesCode(); // no

// Module Pattern
// using closures, we can make private and public parts
var collection = (function () {
    // private
    var objects = [];

    // public
    return {
        addObject: function (obj) {
            objects.push(obj);
        },
        removeObject: function (obj) {
            var index = objects.indexOf(obj);
            if (index >= 0) {
                objects.splice(index, 1);
            }
        },
        getObjects: function () {
            return JSON.parse(JSON.stringify(objects));
        }
    }
})();

collection.addObject("Bob");
collection.addObject("Alice");
collection.addObject("Charlie");

console.log(collection.getObjects()); // logs the array of all 3 names
collection.removeObject("Alice");

console.log(collection.getObjects()); // logs the array of just 2 names now

// Revealing Module Pattern
// write everything as private members,
// then expose an anonymouse object which maps only the members we want to reveal
// to their appropriate public member
var namesCollection = (function () {
    // private
    var objects = [];

    function addObject(object) {
        objects.push(object);
    }

    function removeObject(object) {
        var index = objects.indexOf(object);
        if (index >= 0) {
            objects.splice(index, 1);
        }
    }

    function getObjects() {
        return JSON.parse(JSON.stringify(objects));
    }

    return {
        addName: addObject,
        removeName: removeObject,
        getNames: getObjects
    }
})();

namesCollection.addName("Bob");
namesCollection.addName("Alice");
namesCollection.addName("Charlie");