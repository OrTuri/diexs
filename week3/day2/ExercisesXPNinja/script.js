"use strict";

// Exercise 2 : Ask For Numbers

// let numbers = prompt("Please enter numbers seperated by commas");
// let numbersArray = numbers.split(",");
// for (let i = 0; i < numbersArray.length; i++) {
//   numbersArray[i] = Number(numbersArray[i]);
// }
// let sum = 0;
// for (let i = 0; i < numbersArray.length; i++) {
//   sum += numbersArray[i];
// }
// alert("The sum of the numbers you have entered is " + sum);

// Exercise 3 : Find Nemo

// const sentence = prompt(
//   "Please enter a sentence that have the word 'Nemo' in it"
// );
// if (sentence.indexOf("Nemo") >= 0)
//   console.log(`I found Nemo at index ${sentence.indexOf("Nemo")}`);
// else console.log(`I can't find Nemo`);

// Exercise 4 : Boom

let number = Number(prompt("Please enter a number"));
let str = "";
if (number < 2) alert("boom");
else if (number > 2) {
  str = `b${"o".repeat(number)}m`;
  if (number % 5 == 0 && number % 2 == 0) {
    str = str.toUpperCase();
    str = str.concat("!");
  } else if (number % 5 == 0) str = str.toUpperCase();
  else if (number % 2 == 0) str = str.concat("!");
  alert(str);
}
