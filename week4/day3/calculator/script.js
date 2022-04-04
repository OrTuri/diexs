"use strict";

const display = document.querySelector(".screen-result");
let trig = false;
const displayObj = {
  temp: [],
  num1: [],
  operator: [],
  num2: [],
};
function number(num) {
  if (typeof num === "number") {
    displayObj.temp.push(num);
    display.textContent = displayObj.temp.join("");
  }
}

function operator(operator) {
  if (displayObj.operator <= 1) {
    displayObj.operator.push(operator);
    display.textContent = displayObj.operator.join("");
    if (!trig) {
      displayObj.num1 = displayObj.temp;
      displayObj.temp = [];
    }
  } else {
    display.textContent = "Error!! ⛔🚫⛔🚫";
    document.querySelector(".screen").classList.toggle("error");
  }
}

function equal() {
  displayObj.num2 = displayObj.temp;
  const num1 = Number(displayObj.num1.join(""));
  const num2 = Number(displayObj.num2.join(""));
  console.log(num1, num2);
  if (displayObj.operator[0].includes("+")) {
    console.log(displayObj.operator[0]);
    display.textContent = num1 + num2;
  } else if (displayObj.operator[0].includes("-")) {
    console.log(displayObj.operator[0]);
    display.textContent = num1 - num2;
  } else if (displayObj.operator[0].includes("/")) {
    console.log(displayObj.operator[0]);
    display.textContent = num1 / num2;
  } else if (displayObj.operator[0].includes("*")) {
    console.log(displayObj.operator[0]);
    display.textContent = num1 * num2;
  } else {
    display.textContent = "Something went wrong ☹️";
  }
}

function reset(reset) {
  if (reset) {
    displayObj.temp = [];
    displayObj.num1 = [];
    displayObj.num2 = [];
    displayObj.operator = [];
    display.textContent = 0;
    document.querySelector(".screen").classList.toggle("error");
  }
}
