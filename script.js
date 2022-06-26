// 'use strict';

// // Constructors
// const Person = function (firstname, birthyear) {
//   // Instance Properties
//   this.fn = firstname;
//   this.birth = birthyear;
//   // Don't do this
//   // this.calcage = function () {
//   //   console.log(2037 - this.birthyear);
//   // };
// };
// const Azeez = new Person("Azeez", 2013);
// console.log(Azeez);

// // const Hamza = new Person('Hamza', 2015);
// const mogli = new Person("Mogli", 2019);
// // console.log(Hamza, mogli);
// const Jay = "Jay";
// console.log(Azeez instanceof Person);
// console.log(Jay instanceof Person);
// Person.hey = function () {
//   console.log("Hey there");
// };
// Person.hey();
// mogli.hey();
// // Prototypes
// Person.prototype.calcage = function () {
//   console.log(2037 - this.birth);
// };

// Azeez.calcage();
// mogli.calcage();
// console.log(Person.prototype);

// console.log(Azeez.__proto__);
// console.log(Azeez.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(Azeez));
// console.log(Person.prototype.isPrototypeOf(Hamza));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Spanies';
// console.log(Azeez.__proto__);
// console.log(Person.prototype);
// console.log(Azeez.species);
// console.log(Person.hasOwnProperty('species'));
// console.log(Azeez.hasOwnProperty('species'));
// console.log(Azeez.hasOwnProperty('firstname'));

// // prototype Chaining
// console.log(Azeez.__proto__);
// console.log(Azeez.__proto__.__proto__);
// console.log(Azeez.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// // Protoptype of Array

// const arr = [3, 5, 3, 4, 1, 5, 6, 8, 8, 6];

// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   const sets = new Set(this);
//   return [...sets];
// };

// console.log(arr.unique());

// // Coding Challenge //
// const Car = function (model, speed) {
//   this.Model = model;
//   this.Speed = speed;
// };

// const Bmw = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);
// Car.prototype.calcspeed = function () {
//   console.log(`${this.Model} is going at ${this.Speed}km/h`);
// };

// Bmw.calcspeed();
// Mercedes.calcspeed();

// Car.prototype.accelerate = function () {
//   this.Speed += 10;
//   console.log(`${this.Model} is going at ${this.Speed}km/h`);
// };
// Car.prototype.brake = function () {
//   this.Speed -= 5;
//   console.log(`${this.Model} is going at ${this.Speed}km/h`);
// };
// Bmw.accelerate();
// Bmw.accelerate();
// Bmw.accelerate();
// Bmw.brake();
// Bmw.accelerate();

// Classes //

class PersonCl {
  constructor(fullname, birthyear) {
    this.fullname = fullname;
    this.birthyear = birthyear;
  }
  calcage() {
    console.log(2037 - this.birthyear);
  }
  greet() {
    console.log(`Hey ${this.firstname}`);
  }
  get age() {
    return 2037 - this.birthyear;
  }
  set fullname(name) {
    console.log(name);
    if (name.includes(" ")) this._fullname = name;
    else alert(`${name} is not a full name!`);
  }
  get fullname() {
    return this._fullname;
  }
  static hey() {
    console.log("Hey there");
  }
}

const Mogli = new PersonCl("Mogli Rajpoot", 1997);
const Hamza = new PersonCl("Hamza ALi", 1998);
console.log(Hamza);
Hamza.calcage();
console.log(Hamza.age);
console.log(Hamza.__proto__ === PersonCl.prototype);
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstname}`);
// };
Hamza.greet();
// Hamza.hey();
PersonCl.hey();
// 1. Classes are not hoisted
// 2. Classes are first-class citizen
// 3. Classes are executed in strict mode

// Getters and Setters //

const obj = {
  name: "Azeez",
  movements: [300, 400, 250, 700],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    return this.movements.push(mov);
  },
};
console.log(obj.latest);
obj.latest = 50;
console.log(obj.movements);

const PersonProto = {
  calcage() {
    console.log(2037 - this.birthyear);
  },
};

const sh = Object.create(PersonProto);
sh.firstname = "Shan Haider";
sh.birthyear = 2015;
sh.calcage();
