// Exercise 1: Date #1

const date = require("./date");
console.log(`${date.timeUntilJanuary1()} Days until Jan 1`);

// Exercise 2 : Date #2
const prompt = require("prompt-sync")();
const year = prompt("please enter your birth year (yyyy)");
const month = prompt("please enter your birth month (mm)");
const day = prompt("please enter your birth day (dd)");

console.log(date.minutesLived(year, month, day));

// Exercise 3: Date #3

console.log(date.nextHoliday());
