"use strict";

// Exercise 1 : The World Translator

/*
const userLanguage = prompt("Please enter you language").toLowerCase();
switch (userLanguage) {
  case "french":
    console.log("Bonjour");
    break;
  case "english":
    console.log("Hello");
    break;
  case "hebrew":
    console.log("Shalom");
    break;
  default:
    console.log("0101 0101 0101 0101 0101");
}
*/

// Exercise 2 : The Grade Assigner
/*
const grade = Number(prompt("Please enter your grade"));

if (grade > 90) console.log("A");
else if (grade >= 80 && grade <= 90) console.log("B");
else if (grade >= 70 && grade <= 80) console.log("C");
else console.log("D");
*/

// Exercise 3 : Verbing

let verb = prompt("Please enter a verb");
console.log();
if (verb.length >= 3 && verb.slice(verb.length - 3) !== "ing")
  verb = verb.concat(verb.slice(verb.length - 1)).concat("ing");
else if (verb.length >= 3 && verb.slice(verb.length - 3) === "ing")
  verb = verb.concat("ly");
