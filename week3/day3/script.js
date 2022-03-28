"use strict";

// Exercise 1

// const age = Number(prompt("What is your age?"));
if (age < 18)
  console.log("Sorry, you are too young to drive this car. Powering off");
else if (age === 18)
  console.log("Congratulations on your first year of driving. Enjoy the ride!");
else console.log("Powering On. Enjoy the ride!");

// Exercise 1 - Objects

let user1 = {
  username: "danny123",
  password: "123456",
};

let database = [user1];
let newsfeed = [
  {
    username: "sara102",
    timeline: "11:05",
  },
  {
    username: "dan981",
    timeline: "12:11",
  },
  {
    username: "tammy19",
    timeline: "13:35",
  },
];
