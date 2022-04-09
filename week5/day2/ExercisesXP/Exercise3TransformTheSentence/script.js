"use strict";

// Exercise 3 : Transform The Sentence

// 1

let allBoldItems;

// 2

function getBold_items() {
  allBoldItems = document.querySelectorAll("strong");
}
getBold_items();

// 3

function highlight() {
  allBoldItems.forEach((item) => (item.style.color = "blue"));
}

// 4

function return_normal() {
  allBoldItems.forEach((item) => (item.style.color = "#000"));
}

document.querySelector("p").addEventListener("mouseover", function (event) {
  highlight();
});
document.querySelector("p").addEventListener("mouseout", function (event) {
  return_normal();
});
