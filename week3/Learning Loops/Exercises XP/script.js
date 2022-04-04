"use strict";

// Exercise 1 : List Of People
// part 1

let people = ["Greg", "Mary", "Devon", "James"];
people.splice(people.indexOf("Greg"), 1); // 1
people[people.indexOf("James")] = "Jason"; // 2
people.push("Or"); // 3
console.log(`Marry's index is ${people.indexOf("Mary")}`); // 4
let peopleCopy = people.slice(people.indexOf("Mary") + 1, people.indexOf("Or")); // 5
const peopleCopy2 = people.slice(0, people.length);
peopleCopy2.splice(peopleCopy2.indexOf("Mary"), 1);
peopleCopy2.splice(peopleCopy2.indexOf("Or"), 1);
console.log(peopleCopy.indexOf("foo")); // 6 // It returns -1 because the value of "foo" does not exist in the array. -1 means that it couldn't find it.
let last = people[people.length - 1]; // 7

// part 2

people.forEach((item, i) => {
  // 1
  console.log(item);
});

for (let i = 0; i < people.length; i++) {
  // 2
  if (people[i] === "Jason") break;
  console.log(people[i]);
}

// Exercise 2 : Your Favorite Colors
// 1
let colors = ["Blue", "Green", "Purple", "Orangered"];
// 2
colors.forEach((item) => {
  console.log(item);
});
// 3
let a = ["1st", "2nd", "3rd", "4th"];
colors.forEach((item, i) => {
  console.log(`My ${a[i]} favorite color is ${item}`);
});

// Exercise 3 : Repeat The Question

// 1

let userNum = Number(prompt("Please enter a number"));

// 2

while (userNum < 10) {
  userNum = Number(prompt("Please enter a new number!!"));
}

// Exercise 4 : Building Management

// 1

let building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

// 2

console.log(`There are ${building.numberOfFloors} floors in the building`);

// 3

console.log(
  `There are ${building.numberOfAptByFloor.firstFloor} apartments on the 1st floor and ${building.numberOfAptByFloor.thirdFloor} apartments on the 3rd floor`
);

// 4

console.log(
  `${building.nameOfTenants[1]} has ${
    building.numberOfRoomsAndRent[building.nameOfTenants[1].toLowerCase()][0]
  } rooms`
);

// 5

if (
  building.numberOfRoomsAndRent["sarah"][1] +
    building.numberOfRoomsAndRent["david"][1] >
  building.numberOfRoomsAndRent["dan"][1]
) {
  building.numberOfRoomsAndRent["dan"][1] = 1200;
}

// Exercise 5 : Family

// 1

const family = {
  numOfFamilyMembers: 7,
  nameOfFamilyMembers: [
    "Dan",
    "Tammy",
    "Gal",
    "Yaron",
    "David",
    "Tommy",
    "Sigal",
  ],
  cityLivingIn: "Jerusalem",
  ages: [22, 15, 55, 68, 12, 10, 14],
};

// 2
for (let key in family) {
  console.log(key);
}

// 3

for (let key in family) {
  console.log(family[key]);
}

// Exercise 6

let details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

console.log(`My ${details.my} is ${details.is} the ${details.the}`);

// Exercise 7 : Secret Group

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let secretName = "";
names.forEach((item) => {
  secretName += item[0];
});
console.log(secretName);

