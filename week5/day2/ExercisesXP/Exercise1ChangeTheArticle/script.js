"use strict";
// Exercise 1 : Change The Article

// 1

console.log(document.querySelector("h1").textContent);

// 2

document.querySelector("p:last-child").remove();

// 3
document.querySelector("h2").addEventListener("click", function () {
  this.style.backgroundColor = "red";
});

// 4
document.querySelector("h3").addEventListener("click", function () {
  this.style.display = "none";
});

// 5

let makePBoldBtn = document.createElement("button");
document.querySelector("article").append(makePBoldBtn);
makePBoldBtn.textContent = "Click me to make all paragraphs bold!";
makePBoldBtn.addEventListener("click", function () {
  document.querySelectorAll("p").forEach(function (item) {
    item.style.fontWeight = "bold";
  });
});

// 6 Bonus

document.querySelector("h1").addEventListener("mouseover", function () {
  let random = Math.floor(Math.random() * (100 - 0) + 0);
  this.style.fontSize = `${random}px`;
});

// 7 Bonus
document
  .querySelector("p:nth-child(5)")
  .addEventListener("mouseover", function () {
    document.querySelector("p:nth-child(5)").style.transition =
      "all 2s ease-in-out";
    document.querySelector("p:nth-child(5)").style.opacity = "0";
  });
