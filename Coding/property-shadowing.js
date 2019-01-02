let f = function () {
    this.a = 1;
    //this.b = 2;
}

let o = new f();

f.prototype.b = 3;
f.prototype.c = 4;

console.log(o.b);

//

let obj = {
    a: 2,
    m: function () {
        return this.a + 1;
    }
};

let p = Object.create(obj); // p is an Object that inherits from obj
p.a = 4;

// this refers to p, so this.a means p.a, the property 'a' of p
console.log(p.m());
console.log(obj.m()); // this refers to obj