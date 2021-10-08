"use strict";
// OOP in Javascript : prototypes

// 4 principles of OOP : abstraction, encapsulation, inheritance, polymorphism

// Prototypal inheritance : The prototype contains methods (behavior) that are accessible to all objects linked to that prototype

// Behavior is delegated to the linked prototype object

// Classical OOP : classes : Class -> instance

// OOP in JS : prototypes : Object -> Prototype (delegation)

// 3 Ways of implementing prototypal inheritance in Javascript

// 1. Constructor functions
// - Technique to create objects from a function
// - This is how built-in objects like Arrays, Maps, or Sets are actually implemented

// 2. ES6 Classes
// - Modern alternative to constructor function syntax
// - 'Syntactic sugar' : behind the scenes, ES6 classes work exactly like constructor functions
// - ES6 classes do NOT behave like classes in 'classical OOP'

// 3. Object.create()
// - The easiest and most straightforward way of linking an object to a prototype object

// Constructor Functions and the new Operator

// OOP에서 관습적으로 Constructor function을 만들 때 첫문자는 대문자로 시작한다.
// Constructor function은 함수 표현식과 함수 선언문 둘 다 사용가능하지만 Arrow function은 Constructor function에서 작동하지 않는다. (Arrow function은 자신의 this keyword를 가지고 있지 않기 때문)

const Person = function (fistName, birthYear) {
  // Instance properties
  this.fistName = fistName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2021 - this.birthYear);
  // };
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);
// new operator와 함께 위의 Person함수를 호출하면 아래의 4가지 단계를 거치게 된다.

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

console.log(jonas instanceof Person);
