"use strict";
// // // OOP in Javascript : prototypes

// // // 4 principles of OOP : abstraction, encapsulation, inheritance, polymorphism

// // // Prototypal inheritance : The prototype contains methods (behavior) that are accessible to all objects linked to that prototype

// // // Behavior is delegated to the linked prototype object

// // // Classical OOP : classes : Class -> instance

// // // OOP in JS : prototypes : Object -> Prototype (delegation)

// // // 3 Ways of implementing prototypal inheritance in Javascript

// // // 1. Constructor functions
// // // - Technique to create objects from a function
// // // - This is how built-in objects like Arrays, Maps, or Sets are actually implemented

// // // 2. ES6 Classes
// // // - Modern alternative to constructor function syntax
// // // - 'Syntactic sugar' : behind the scenes, ES6 classes work exactly like constructor functions
// // // - ES6 classes do NOT behave like classes in 'classical OOP'

// // // 3. Object.create()
// // // - The easiest and most straightforward way of linking an object to a prototype object

// // // Constructor Functions and the new Operator

// // // OOP에서 관습적으로 Constructor function을 만들 때 첫문자는 대문자로 시작한다.
// // // Constructor function은 함수 표현식과 함수 선언문 둘 다 사용가능하지만 Arrow function은 Constructor function에서 작동하지 않는다. (Arrow function은 자신의 this keyword를 가지고 있지 않기 때문)

// // const Person = function (firstName, birthYear) {
// //   // Instance properties
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;

// //   // Never do this
// //   // this.calcAge = function () {
// //   //   console.log(2021 - this.birthYear);
// //   // };
// // };

// // const jonas = new Person("Jonas", 1991);
// // console.log(jonas);
// // // new operator와 함께 위의 Person함수를 호출하면 아래의 4가지 단계를 거치게 된다.

// // // 1. New {} is created
// // // 2. function is called, this = {}
// // // 3. {} linked to prototype
// // // 4. function automatically return {}

// // console.log(jonas instanceof Person);

// // Person.hey = function () {
// //   console.log("Hey there");
// //   console.log(this);
// // };
// // Person.hey();

// // // Prototypes
// // console.log(Person.prototype);

// // Person.prototype.calcAge = function () {
// //   console.log(2021 - this.birthYear);
// // };

// // jonas.calcAge();

// // console.log(jonas.__proto__);
// // console.log(jonas.__proto__ === Person.prototype);

// // console.log(Person.prototype.isPrototypeOf(jonas));
// // console.log(Person.prototype.isPrototypeOf(Person));

// // console.log(jonas.hasOwnProperty("firstName"));
// // console.log(jonas.hasOwnProperty("calcAge"));

// // // Every object in Javascript has a prototype

// // // Prototypal Inheritance on Built-in Objects
// // console.log(jonas.__proto__);
// // // Object.prototype (top of prototype chain)
// // console.log(jonas.__proto__.__proto__);
// // console.log(jonas.__proto__.__proto__.__proto__); // null

// // console.log(Person.prototype.constructor);

// // const arr = [3, 4, 4, 5, 6, 9, 3];

// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };

// // console.log(arr.unique());

// // // Coding Challenge #1

// // const Car = function (make, speeds) {
// //   this.make = make;
// //   this.speeds = speeds;
// // };

// // Car.prototype.accelerate = function () {
// //   this.speeds += 10;
// //   console.log(`${this.speeds} is going at ${this.speeds}km/h`);
// // };

// // Car.prototype.brake = function () {
// //   this.speeds -= 5;
// //   console.log(`${this.speeds} is going at ${this.speeds}km/h`);
// // };

// // const bmw = new Car("BMW", 120);
// // const mercedes = new Car("Mercedes", 95);

// // bmw.accelerate();
// // bmw.accelerate();
// // bmw.brake();
// // bmw.accelerate();

// // // ES6 Classes
// // // class expression
// // // const PersonCl = class {}

// // // class declaration
// // class PersonCl {
// //   constructor(fullName, birthYear) {
// //     this.fullName = fullName;
// //     this.birthYear = birthYear;
// //   }

// //   // Instance methods
// //   // Methods will be added to .prototype property
// //   calcAge() {
// //     console.log(2021 - this.birthYear);
// //   }

// //   greet() {
// //     console.log(`Hey ${this.name}`);
// //   }

// //   get age() {
// //     return 2037 - this.birthYear;
// //   }

// //   // Set a property that already exists
// //   set fullName(name) {
// //     if (name.includes(" ")) this._fullName = name;
// //     else alert(`${name} is not a valid name!`);
// //   }

// //   get fullName() {
// //     return this._fullName;
// //   }

// //   // Static method
// //   static hey() {
// //     console.log("Hey there");
// //     console.log(this);
// //   }
// // }

// // const jinsoo = new PersonCl("Jinsoo Lee", 1996);
// // console.log(jinsoo);
// // jinsoo.calcAge();

// // // PersonCl.prototype.greet = function () {
// // //   console.log(`Hey, ${this.name}`);
// // // };
// // jinsoo.greet();

// // // 1. Classes are NOT hoisted
// // // 2. Classes are first-class citizens
// // // 3. Classes are executed in strict mode

// // const walter = new PersonCl("Walter", 1950);

// // PersonCl.hey();

// // // Setters and Getters
// // const account = {
// //   owner: "Jinsoo",
// //   movements: [200, 452, 423, 159],

// //   get latest() {
// //     return this.movements.slice(-1).pop();
// //   },

// //   set latest(mov) {
// //     this.movements.push(mov);
// //   },
// // };

// // console.log(account.latest);

// // account.latest = 50;
// // console.log(account.movements);

// // // Object.create
// // const PersonProto = {
// //   calcAge() {
// //     console.log(2021 - this.birthYear);
// //   },

// //   init(firstName, birthYear) {
// //     this.firstName = firstName;
// //     this.birthYear = birthYear;
// //   },
// // };

// // const steven = Object.create(PersonProto);
// // console.log(steven);
// // steven.name = "Steven";
// // steven.birthYear = 1996;
// // steven.calcAge();

// // const sarah = Object.create(PersonProto);
// // sarah.init("Sarah", 1970);
// // console.log(sarah);
// // sarah.calcAge();

// // // Coding Challenge #2

// // class CarCl {
// //   constructor(make, speeds) {
// //     this.make = make;
// //     this.speeds = speeds;
// //   }

// //   accelerate() {
// //     this.speeds += 10;
// //     console.log(`${this.make} is going at ${this.speeds}km/h`);
// //   }

// //   brake() {
// //     this.speeds -= 5;
// //     console.log(`${this.make} is going at ${this.speeds}km/h`);
// //   }

// //   get speedUs() {
// //     return this.speeds / 1.6;
// //   }

// //   set speedUs(speeds) {
// //     this.speeds = speeds * 1.6;
// //   }
// // }

// // const ford = new CarCl("Ford", 120);
// // console.log(ford.speedUs);
// // ford.accelerate();
// // ford.accelerate();
// // ford.brake();
// // ford.brake();
// // console.log(ford.speedUs);
// // ford.speedUs = 50;
// // console.log(ford);

// Inheritance between 'Classes' : Constructor functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName}, I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;

// Coding Challenge #3
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
