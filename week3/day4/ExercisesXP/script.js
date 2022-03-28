"use strict";
// Exercise 1: Simple If/Else Statement

let x = 30;
let y = 20;

if (x > y) console.log(`x is bigger than y`);
else if (x === y) console.log(`x and y are equalls`);
else console.log(`y is bigger than x`);

// Exercise 2: Chihuahua

let newDog = "Chihuahua";
console.log(`The length of the varaiable newDog is ${newDog.length}`);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog == "Chihuahua")
  console.log("I love Chihuahuas, it’s my favorite dog breed");
else console.log("I dont care, I prefer cats");

// Exercise 3: Even Or Odd

const number = Number(prompt("Please enter a number"));
if (number % 2 === 0) console.log(`${number} is an even number`);
else console.log(`${number} is an odd number`);

// Exercise 4: Group Chat

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length === 0) console.log("No one is online");
else if (users.length === 1) console.log(`${users[0]} is online`);
else if (users.length === 2)
  console.log(`${users[0]} and ${users[1]} are online`);
else
  console.log(
    `${users[0]}, ${users[1]} and ${users.length - 2} other users are online`
  );
