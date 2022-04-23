"use strict";
// Exercise 1 : Scope
// #1
// function q1() {
//   var a = 5;
//   if (a > 1) {
//     a = 3;
//   }
//   alert(a);
// }

// run in the console:
// q1();
// The value of a will be 3.
//#2
// var a = 0;
// function q2() {
//   a = 5;
// }

// function q22() {
//   alert(a);
// }

// // run in the console:
// q22(); // The value of a will be 0.
// q2(); // The value of a will be 5.
// q22(); // The value of a will be 5.

// //#3
// function q3() {
//   window.a = "hello";
// }

// function q32() {
//   alert(a);
// }

// // run in the console:
// q3(); // The value of a will be "hello";
// q32(); // The value of a is "hello"

// //#4
// var a = 1;
// function q4() {
//   var a = "test";
//   alert(a);
// }

// // run in the console:
// q4(); // value of a will be "test".

// //#5
// var a = 2;
// if (true) {
//   var a = 5;
//   alert(a);
// }
// alert(a); // value of a will be 5.

// Exercise 2 : Ternary Operator
// 1

const winBattle = () => {
  return true;
};

//2 + 3

let experiencePoints = winBattle() ? 10 : 1;

// 4

console.log(experiencePoints);

// Exercise 3 : Is It A String ?

const isString = (value) => {
  return typeof value === "string" ? true : false;
};

// Exercise 4 : Colors

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1

colors.forEach((color, i) => {
  console.log(`${i + 1}# choice is ${color}`);
});

//2

console.log(colors.includes("Violet") ? "Yeah" : "No");

// Exercise 5 : Colors #2

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];

color.forEach((color, i) => {
  console.log(
    `${i + 1 + (i < 3 ? ordinal[i + 1] : ordinal[0])} choice color is ${color}`
  );
});

// Exercise 6 : Bank Details
// 1

let bankAmount = 20000;

// 2

let vat = 0.17;

// 3

let details = [+1870, -1566, +976, -1433, -487, +2741];

// 4

let detailsAfterVat = details.map((movement) => {
  return movement * vat + movement;
});

// 5

let detailsAfterVatSum = detailsAfterVat.reduce((a, b) => a + b, 0);
console.log(`Current bank account: ${bankAmount + detailsAfterVatSum}`);
