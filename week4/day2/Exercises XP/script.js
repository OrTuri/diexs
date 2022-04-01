"use strict";

// Exercise 1 : Information
// part 1
function infoAbouitMe() {
  console.log(`My name is Or, I"m 30 years old and I live in Ramat Gan`);
}
infoAbouitMe();

// part 2

function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log(
    `${personName} is ${personAge} years old and his favorite color is ${personFavoriteColor}`
  );
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// Exercise 2 : Tips

function calculateTip() {
  const bill = Number(prompt("How much is the total bill?"));
  let tip;
  if (bill < 50) tip = 50 * 0.2;
  if (bill > 50 && bill < 200) tip = bill * 0.15;
  else tip = 50 * 0.1;
  console.log(`The total amount is: ${bill + tip}$`);
}
// calculateTip();

// Exercise 3 : Find The Numbers Divisible By 23

function isDivisible() {
  const numArr = [];
  for (let i = 0; i <= 500; i++) {
    if (!(i % 23)) {
      numArr.push(i);
    }
  }
  console.log(`Outcome: ${numArr.join(", ")}`);
  console.log(`Sum: ${numArr.reduce((a, b) => a + b, 0)}`);
}
isDivisible();

// Bonus

function isDivisibleManual(num) {
  let sum = 0;
  const numArr = [];
  for (let i = 0; i <= 500; i++) {
    if (!(i % num)) {
      numArr.push(i);
    }
  }
  console.log(`Outcome: ${numArr.join(", ")}`);
  console.log(`Sum: ${numArr.reduce((a, b) => a + b, 0)}`);
}
isDivisibleManual(5);

// Exercise 4 : Shopping List

let stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

let prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  shoppingList.forEach((item, i) => {
    if (stock[item] > 0) {
      console.log(`Your ${item} cost ${prices[item]}$`);
      stock[item]--;
    } else console.log(`${item} is not in stock!`);
  });
}
myBill();

// Exercise 5 : What’s In My Wallet ?

function changeEnough(itemPrice, amountOfChange) {
  const totalAmount =
    amountOfChange[0] * 0.25 +
    amountOfChange[1] * 0.1 +
    amountOfChange[2] * 0.05 +
    amountOfChange[3] * 0.01;
  if (totalAmount >= itemPrice) return true;
  else return false;
}
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));

// Exercise 6 : Vacations Costs

// 1

function hotelCost(numNights) {
  while (isNaN(numNights)) {
    numNights = Number(
      prompt("Something went wrong! Please enter a number!!!")
    );
  }
  return 140 * numNights;
}
// hotelCost();

// 2

function planeRideCost(destination) {
  const regex = /([0-9| ])/g;
  while (regex.test(destination)) {
    destination = prompt("Something went wrong! Please try again!");
  }
  switch (destination) {
    case "London":
      return 183;
      break;
    case "Paris":
      return 220;
      break;
    default:
      return 300;
      break;
  }
}

// console.log(planeRideCost());

// 3

function rentalCarCost(days) {
  while (isNaN(days)) {
    days = Number(prompt("Something went wrong! Please enter number of days!"));
  }
  if (days > 10) return days * 40 * 0.95;
  else return days * 40;
}

// console.log(rentalCarCost());

// 4, 5 + Bonus

function totalVacationCost() {
  const hotel = hotelCost(
    Number(
      prompt(
        "Please enter the number of nights you will be staying in the hotel"
      )
    )
  );
  const car = rentalCarCost(
    Number(prompt("Please enter number of rental days for the car"))
  );
  const flight = planeRideCost(prompt("What is your destination?"));
  console.log(
    `The hotel cost is: ${hotel}$, the flight cost is: ${flight}$ and the car rental cost is: ${car}$.\nThe total cost of your vactaion is ${
      hotel + flight + car
    }$`
  );
}
totalVacationCost();
