"use strict";

// Exercise 1 : Divisible By Three

let numbers = [123, 8409, 100053, 333333333, 7];

numbers.forEach((item) => {
  console.log(`${item} ${item % 3 === 0 ? "is" : "is not"} divisible by 3`);
  console.log(item % 3 === 0 ? true : false);
});

// Exercise 2 : Attendance

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};
// 1

const userName = prompt("Please enter your name");

// 2

if (userName in guestList) {
  console.log(`Hi! I'm ${userName}, and I'm from ${guestList[userName]}.`);
}

// 3
else console.log("Hi! I'm a guest");

// Exercise 3 : Playing With Numbers

let age = [20, 5, 12, 43, 98, 55];

// 1

let sum = 0;
for (let i = 0; i < age.length; i++) {
  sum += age[i];
}
console.log(sum);

// 2

let highest = age[0];

for (let i = 0; i < age.length; i++) {
  if (age[i] > highest) highest = age[i];
}
console.log(highest);
