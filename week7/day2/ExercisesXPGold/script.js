"use strict";

// Exercise 1 : Analyzing The Map Method

[1, 2, 3].map((num) => {
  if (typeof num === "number") return num * 2;
  return;
}); // The output will be: [2, 4, 6];

// Exercise 2: Analyzing The Reduce Method

[
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
); // The output will be: [1, 2, 0, 1, 2, 3];

// Exercise 3 : Analyze This Code

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  //   console.log(num, i);
  //   alert(num);
  return num * 2;
}); // The value of i is: 0, 1, 2, 3, 4, 5

// Exercise 4 : Nested Arrays

// 1

const array = [[1], [2], [3], [[[4]]], [[[5]]]].flat(2);

// 2

const greeting = [
  ["Hello", "young", "grasshopper!"].flat().join(" "),
  ["you", "are"].flat().join(" "),
  ["learning", "fast!"].flat().join(" "),
];

// 3

const greetingString = greeting.join(" ");

// 4

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]].flat(999);
