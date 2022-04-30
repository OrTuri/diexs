"use strict";

// Exercise 1 : Location

const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// The output will be: "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)";

// Exercise 2: Display Student Info
const obj = {
  firstName: "Danny",
  lastName: "Levy",
  age: 44,
  city: "Tel Aviv",
};
const displayStudentInfo = ({ firstName, lastName, age, city }) => {
  console.log(
    `Hello ${firstName} ${lastName}. You are ${age} and you live in ${city}.`
  );
};

displayStudentInfo(obj);

// Exercise 3: User & Id

// 1
const users = { user1: 18273, user2: 92833, user3: 90315 };
const usersEntries = Object.entries(users);

// 2

const usersEntriesDoubledId = usersEntries.map((user) => {
  user[1] = user[1] * 2;
  return user;
});

// Exercise 4 : Person Class

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);

// The output will be: "Object";

// Exercise 5 : Dog Class

// 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// } // Only this will work since it uses the Super keyword and also have "name" as a parameter in the function.

// Exercise 6 : Challenges

// 1

// [2] === [2]
// {} === {}

// They both will be false because in memory they are two different objects/arrays.

// 2

const object1 = { number: 5 };
const object2 = object1; // number === 5;
const object3 = object2; // number === 5;
const object4 = { number: 5 }; // number === 5;

object1.number = 4;
console.log(object2.number); // number === 4;
console.log(object3.number); // number === 4;
console.log(object4.number); // number === 5;

// 1

class animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// 2

class mamal extends animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound(sound) {
    return `The animal ${this.name} of type ${this.type} and color ${this.color} makes the sound: ${sound}`;
  }
}

const cow = new mamal("cow", "mamal", "white");
console.log(cow.sound("mooooooooooooo"));
