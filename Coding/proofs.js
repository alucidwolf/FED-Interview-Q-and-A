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
    var balance = initialBalance;

    return {
        getBalance: function () {
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