"use strict";

// Exercise 1 : Print Full Name
const studentObj = {
  firstName: "John",
  lastName: "Doe",
  avgGrades: 87,
};
const printFullName = ({ firstName, lastName, avgGrades }) => {
  return `Hello ${firstName} ${lastName}, the average of your grades is: ${avgGrades}`;
};

console.log(printFullName(studentObj));

// Exercise 2 : Keys And Values

const objToKeyValueArr = (object) => {
  let sortedObject = Object.fromEntries(Object.entries(object).sort());
  return [Object.keys(sortedObject), Object.values(sortedObject)];
};
console.log(
  objToKeyValueArr({ d: "d", c: "c", z: "z", a: "a", b: "a", r: "r", f: "f" })
);

// Exercise 3 : Counter Class

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);

// The output will be: 3 because counterTwo is just an address in memory that points to counterOne so basically you userd the method increment() 3 times on counterOne.
