"use strict";

// Exercise 1 : Age Difference

const younger = 1992;
const older = 1970;
const currentYear = 2022;
let year = older + (younger - older) * 2;
console.log(year);

// Exercise 2 : Zip Codes
// part 1
// const zipCode = prompt("Please enter your zipcode");
const zipCode = "12365";
const pattern = /^([0-9]{5})$/gm;
const zipCodeValidation = pattern.test(zipCode);

if (zipCodeValidation) console.log("success!");
else console.log("Error! Try again!");

// part 2
const zipCode2 = "12365";
const zipCodeValidation2 =
  zipCode2.toString().length === 5 && !zipCode2.toString().includes(" ");
console.log(zipCodeValidation2);
if (zipCodeValidation2) console.log("success!");
else console.log("Error! Try again!");

// Exercise 3 : Secret Word

const word = "Hello there how are you";
const regex = /(a|e|i|o|u)/g;
console.log(
  word.replace(regex, (x) => {
    switch (x) {
      case "a":
        return 1;
        break;
      case "e":
        return 2;
        break;
      case "i":
        return 3;
        break;
      case "o":
        return 4;
        break;
      case "u":
        return 5;
        break;
    }
  })
);
