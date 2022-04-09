"use strict";
// Exercise 3 : Create A Shopping List
// 1
let shoppingList = [];
// 2
let form = document.createElement("form");
let input = document.createElement("input");
let btn = document.createElement("button");
input.type = "text";
btn.textContent = "Add item!";
input.style.marginRight = "20px";
form.append(input);
form.append(btn);
input.placeholder = "Please enter text";
document.querySelector("#root").append(form);
// 3
function addItem(item) {
  shoppingList.push(item);
}
btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value !== "") {
    addItem(input.value);
    input.value = "";
    displayList();
  } else alert("You didn't evter anything!");
});
// 4
let clearBtn = document.createElement("button");
clearBtn.textContent = "Clear All!";
clearBtn.style.marginLeft = "20px";
form.append(clearBtn);
// 5
function clearAll() {
  shoppingList = [];
  document.querySelector("ul").remove();
  createUl();
}
clearBtn.addEventListener("click", function (e) {
  e.preventDefault();
  clearAll();
});
function createUl() {
  let ul = document.createElement("ul");
  document.body.append(ul);
}
createUl();
function displayList() {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  let textNode = document.createTextNode(shoppingList[shoppingList.length - 1]);
  ul.append(li);
  li.append(textNode);
}
