"use strict";

// Exercise 1 : Analyzing

// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// The output will be: ['bread',"carrot", "potato",'chicken',"apple", "orange"];

// ------2------
// const country = "USA";
// console.log([...country]);

// The output will be: ["USA"];
// I was wrong. The output is ["U","S","A"];

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

// The output will be: [,,];
// I was wrong. The output is [undefined, undefined];

// Exercise 2 : Employees

let users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// 1

const welcomeStudents = users.map((user) => `Welcome ${user.firstName}`);

// 2

const onlyFullStack = users.filter((user) => {
  if (user.role.toLowerCase().includes("full stack")) {
    return true;
  }
});

// 3

const lastNames = users
  .filter((user) => {
    if (user.role.toLowerCase().includes("full stack")) {
      return true;
    }
  })
  .map((user) => user.lastName);

// Exercise 3 : Star Wars

let epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

const epicReduce = epic.reduce((acc, curr) => {
  return acc + " " + curr;
}, "");

// Exercise 4 : Employees #2

let students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

// 1

const studentsPassed = students.filter((student) => {
  return student.isPassed ? true : false;
});

// 2

students
  .filter((student) => {
    return student.isPassed ? true : false;
  })
  .forEach((student, i) => {
    student.message = `Good Job ${student.name}, you passed the course in ${student.course}`;
  });
