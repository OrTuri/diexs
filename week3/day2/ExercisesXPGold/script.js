"use strict";

// Exercise 1 : Favorite Color

let sentence = ["my", "favorite", "color", "is", "blue"];
console.log(sentence.join(" "));

// Exercise 2 : Mixup

let str1 = "mix";
let str2 = "pod";
let temp = str1.slice(0, 2);
str1 = str2.slice(0, 2) + str1.slice(2);
str2 = temp + str2.slice(2);
let newWord = `${str1} ${str2}`;
console.log(str1);
console.log(str2);
console.log(newWord);

// Exercise 3 : Calculator

const num1 = Number(prompt("Please eneter the first number"));
const op = prompt("Please enter an operator");
const num2 = Number(prompt("Please eneter the second number"));
let answer;
if (op == "+") answer = num1 + num2;
else if (op == "-") answer = num1 - num2;
else if (op == "/") answer = num1 / num2;
else if (op == "*") answer = num1 * num2;
else alert("Operator is not recognizable!");
alert(`The sum of the numbers is ${answer}`);
