"use strict";

// Exercise 1: Sum Elements

const calcSum = (array) => {
  return array.reduce((a, b) => a + b, 0);
};

// Exercise 2 : Remove Duplicates

const removeDuplicate = (array) => {
  const arr = [];
  array.forEach((item) => {
    if (!arr.includes(item)) {
      arr.push(item);
    }
  });
  return arr;
};

// Exercise 3 : Remove Certain Values

const removeValue = (array) => {
  return array.filter((item) => item);
};

// Exercise 4 : Repeat Please !

const repeatString = (string, num) => {
  return string.repeat(num);
};

// Exercise 5 : Turtle & Rabbit

const startLine = "     ||<- Start line";
let turtle = "🐢".padStart(20);
let rabbit = "🐇".padStart(20);

console.log(startLine);
console.log(turtle);
console.log(rabbit);
