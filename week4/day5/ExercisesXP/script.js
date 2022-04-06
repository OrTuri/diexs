"use strict";

// Exercise 1 : Change The Navbar
// 1

const div = document.querySelector("#navBar");
div.id = "socialNetworkNavigation";

// 2

const newLi = document.createElement("li");
const textNode = document.createTextNode("Logout");
newLi.append(textNode);
const ul = document.querySelector("ul:first-child");
ul.append(newLi);
// Bonus
const firstLi = document.querySelector("ul:first-child li:first-child");
const lastLi = document.querySelector("ul:first-child li:last-child");
console.log(firstLi.textContent);
console.log(lastLi.textContent);

// Exercise 2 : Users

// 1

document.querySelector(".list > li:nth-child(2)").textContent = "Richard";

// 2

document.querySelectorAll(".list li:first-child").forEach((item) => {
  item.textContent = "Or";
});

// 3

document.querySelectorAll(".list").forEach((item) => {
  item.append((document.createElement("li").textContent = "Hey students"));
});

// 4

document.querySelector(".list:last-of-type li:nth-child(2)").remove();

// Bonus

document.querySelectorAll(".list").forEach((item) => {
  item.classList.add("student_list");
});

document.querySelector(".list").classList.add("university", "attendance");

// Exercise 3 : Users And Style

// 1

document.querySelector("div.ex-3").style.backgroundColor = "aqua";
document.querySelector("div.ex-3").style.padding = "30px";

// 2

document.querySelector("ul.ex-3 li:first-child").remove();

// 3

document.querySelector("ul.ex-3 li").style.border = "1px solid red";

// 4

document.body.style.fontSize = "20px";

// 5

if (document.querySelector("div.ex-3").style.backgroundColor === "aqua") {
  alert(
    `Hello ${
      document.querySelector("ul.ex-3 li:first-child").textContent
    } and ${document.querySelector("ul.ex-3 li:last-child").textContent}`
  );
}
