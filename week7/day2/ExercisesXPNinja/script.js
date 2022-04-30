"use strict";

// Exercise 1 : Dog Competition

const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Cuty",
    age: 5,
    type: "rabbit",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
  {
    name: "Rex",
    age: 10,
    type: "dog",
  },
];

// 1
let sum = 0;
for (let item of data) {
  sum += item.age * 7;
}

// 2

const dogAgeSum2 = data.reduce((acc, cur) => {
  return cur.age * 7 + acc;
}, 0);

// Exercise 2 : Email

const userEmail3 = " cannotfillemailformcorrectly@gmail.com ".trim();

// Exercise 3 : Employees #3

let users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

const newUsers = users.map((user) => {
  let obj = {};
  obj[`${user.firstName} ${user.lastName}`] = user.role;
  return obj;
});

// Exercise 4 : Array To Object
// 1
const letters = ["x", "y", "z", "z"];
const lettersObj = {};
for (let item of letters) {
  let counter = 0;
  for (let i = 0; i < letters.length; i++) {
    if (item === letters[i]) counter++;
  }
  lettersObj[item] = counter;
}

// 2

const lettersObj2 = letters.reduce((acc, cur) => {
  let counter = 0;
  for (let i = 0; i < letters.length; i++) {
    if (cur === letters[i]) counter++;
  }
  acc[cur] = counter;
  return acc;
}, {});
