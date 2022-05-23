"use strict";
// Exercise 1 : Comparison
function compareToTen(num) {
  return new Promise((resolve, reject) => (num < 10 ? resolve() : reject()));
}
compareToTen(9)
  .then(() => console.log("success"))
  .catch(() => console.log("Failure"));

// Exercise 2 : Promises

// 1 + 3

const timer = new Promise((res) => setTimeout(() => res("Success"), 4000));

timer
  .then((res) => console.log(res))
  .catch(() => console.log(`Ooops something went wrong`));

// 2

const timer2 = Promise.resolve("Success");
timer2.then((res) => {
  setTimeout(() => {
    console.log(res);
  }, 4000);
});

// Exercise 3 : Resolve & Reject

// 1

const selfResolved = Promise.resolve(3);
const selfReject = Promise.reject("Boo!").catch(() => console.log("Err"));
