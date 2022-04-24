"use strict";

let client = "John";

let groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

// 1

const displayGroceries = () =>
  groceries.fruits.forEach((fruit) => console.log(fruit));
displayGroceries();

// 2

const cloneGroceries = () => {
  let user = client;
  client = "Betty"; // user will not be affected because it's a primitive type.
  const shopping = groceries;
  groceries.totalPrice = "35$"; // shopping will also be affected because it's just a reffernce to the froceries object.
  groceries.payed = false; // the same apply here
};
cloneGroceries();
