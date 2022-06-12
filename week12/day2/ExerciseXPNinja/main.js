// Exercise 1 : Faker Module

const prompt = require("prompt-sync")();
// import { faker } from "@faker-js/faker";

const users = new Array();

class user {
  constructor(name, street, country) {
    this.name = name;
    this.street = street;
    this.country = country;
    users.push(this);
  }
}

// for (let i = 0; i < 500; i++) {
//   new user(
//     faker.name.findName(),
//     faker.address.streetAddress(),
//     faker.address.country()
//   );
// }

// console.log(users);

// Exercise 2 : Regular Expression #1

const extractNumbers = require("extract-numbers");
const extractedNumbers = extractNumbers("dfg45hghf3bg7");

console.log(extractedNumbers.join(""));

// Exercise 3 : Regular Expression #2

const fullName = prompt("Please enter your full name");

const nameCheck = (fullName) => {
  const regex = new RegExp(/\S*\d+\S*/, "gm");
  const nameHasNum = regex.test(fullName);
  if (nameHasNum) {
    console.log("You can't use numbers!!");
    return;
  }
  if (fullName.split(" ").length > 2) {
    console.log("You can't use more than one space!!");
    return;
  }
  if (fullName.at(0).toUpperCase() !== fullName.at(0)) {
    console.log("The first letter of your name must be upper cased!!");
    return;
  }
  console.log(`Your name is: ${fullName}`);
};

nameCheck(fullName);
