"use strict";

// Exercise 1 : Nested Functions

// 1 + 2

let landscape = function () {
  let result = "";

  let flat = (x) => {
    for (let count = 0; count < x; count++) {
      result = result + "_";
    }
  };

  let mountain = (x) => {
    result = result + "/";
    for (let counter = 0; counter < x; counter++) {
      result = result + "'";
    }
    result = result + "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

// I think that the returned value from the landscape  function will be: "____/''''\\____", and I really can't explain it. all I did is just following the functions and understand what their output will be.

// Exercise 2 : Closure

const addTo = (x) => (y) => x + y;
let addToTen = addTo(10);
addToTen(3); // The returned value will be 13 because the second function is returned and you put 3 in y and 10 at x.

// Exercise 3 : Currying

const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1); // It's exactly the same as the function above. The result will be 31.

// Exercise 4 : Currying

const curriedSum2 = (a) => (b) => a + b;
const add5 = curriedSum2(5);
add5(12); // The outcome will be 17.

// Exercise 5 : Composing

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5_2 = (num) => num + 5;
compose(add1, add5_2)(10); // I think that the outcome will be undefined because the functions add1 and add5 does not get any arguments.
//Edit: I was wrong. The function add1 and add5_2 are defined inside the compose function after it's being called and that's why it works.
