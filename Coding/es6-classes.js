// Before ES6

// Create a constructor function that has 2 read only properties
// and a cusotm toString method
function Animal(name, fierce) {
  Object.defineProperty(this, 'name', {
    get: function() {
      return name;
    }
  });

  Object.defineProperty(this, 'fierce', {
    get: function() {
      return fierce;
    }
  });
}

Animal.prototype.toString = function() {
  return 'A' + ' ' + (this.fierce ? 'fierce' : 'tame') + ' ' + this.name;
}

// Create a new animal
var Lion = new Animal('Lion', true);
console.log(Lion.toString());

// Using ES6
class AnimalES6 {
  constructor(name, fierce) {
    this._name = name;
    this._fierce = fierce;
  }

  get name() {
    return this._name;
  }

  get fierce() {
    return `This animal is ${this._fierce ? 'fierce' : 'tame'}`;
  }

  toString() {
    return `This is a ${this._fierce ? 'fierce' : 'tame' } ${this._name}`;
  }
}

let LionES6 = new AnimalES6('Lion', true);
console.log(LionES6.fierce);
console.log(LionES6.toString());
