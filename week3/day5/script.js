"use strict";

// Exercise 1

for (let i = 0; i <= 15; i++) {
  console.log(`${i} is ${i % 2 === 0 ? "even" : "odd"}`);
}

// Exercise 2

// 1

let names = ["john", "sarah", 23, "Rudolf", 34];
for (let i = 0; i < names.length; i++) {
  if (typeof names[i] !== "string") continue;
  if (names[i].slice(0, 1) === names[i].slice(0, 1).toLowerCase()) {
    names[i] = names[i].replace(
      names[i].slice(0, 1),
      names[i].slice(0, 1).toUpperCase()
    );
  }
}
console.log(names);

// 2
