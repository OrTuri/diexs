"use strict";

// Exercise 1: Your Favorite Food

const favoriteFoodDay = "lunch";
const favoriteFood = "pasta";
console.log(`I eat ${favoriteFood} for ${favoriteFoodDay} every day`);

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const myWatchedSeriesLength = myWatchedSeries.length;
const myWatchedSeriesString = myWatchedSeries.join(", ");
console.log(
  `I watched ${myWatchedSeriesLength} serieses: ${myWatchedSeriesString}.`
);

// Exercise 2 : Series

myWatchedSeries.splice(length - 1, 1, "Friends");
console.log(myWatchedSeries);
myWatchedSeries.push("Rick and Morty");
console.log(myWatchedSeries);
myWatchedSeries.unshift("American Horror Story");
console.log(myWatchedSeries);
myWatchedSeries.splice(1, 1);
console.log(myWatchedSeries);
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);

// Exercise 3 : The Temperature Converter

let tempCel = 40;
let tempFar = (tempCel * 9) / 5 + 32;
console.log(
  `The temperature is celcius is ${tempCel} and in farenhiet is ${tempFar}`
);

// Exercise 4 : Guess The Answers #1

let c;
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: 55
// Actual: 55

a = 2;

console.log(a + b); //second expression
// Prediction: 23
// Actual: 23

console.log(3 + 4 + "5"); // 75

// Exercise 5 : Guess The Answers #2

typeof 15;
// Prediction: number
// Actual: number

typeof 5.5;
// Prediction: number
// Actual: number

typeof NaN;
// Prediction: NaN
// Actual: number

typeof "hello";
// Prediction: string
// Actual: string

typeof true;
// Prediction: boolean
// Actual: boolean

typeof (1 != 2);
// Prediction: boolean
// Actual: boolean

"hamburger" + "s";
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s";
// Prediction: undefined
// Actual: NaN

"1" + "3";
// Prediction: 13
// Actual: 13

"1" - "3";
// Prediction: NaN
// Actual: -2

"johnny" + 5;
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5;
// Prediction: NaN
// Actual: NaN

99 * "hello";
// Prediction: NaN
// Actual: NaN

1 != 1;
// Prediction: false
// Actual: false

1 == "1";
// Prediction: true
// Actual: true

1 === "1";
// Prediction: false
// Actual: false

// Exercise 6 : Guess The Answers #3

5 + "34";
// Prediction: 534
// Actual: 534

5 - "4";
// Prediction: NaN
// Actual: 1

10 % 5;
// Prediction: 0
// Actual: 0

5 % 10;
// Prediction: 0
// Actual: 5

"Java" + "Script";
// Prediction: JavaScript
// Actual: JavaScript

" " + " ";
// Prediction:
// Actual:

" " + 0;
// Prediction: 0
// Actual: 0

true + true;
// Prediction: true
// Actual: 2

true + false;
// Prediction: 1
// Actual: 1

false + true;
// Prediction: 1
// Actual: 1

false - true;
// Prediction: NaN
// Actual: -1

!true;
// Prediction: false
// Actual: false

3 - 4;
// Prediction: -1
// Actual: -1

"Bob" - "bill";
// Prediction: NaN
// Actual: NaN
