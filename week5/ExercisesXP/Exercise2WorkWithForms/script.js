"use strict";

// Exercise 2 : Work With Forms

// 1

console.log(document.forms[0].innerHTML);

// 2

console.log("First name:", document.querySelector("#fname"));
console.log("Last name:", document.querySelector("#lname"));
console.log("Submit:", document.querySelector("#submit"));

// 3

console.log();

console.log("First name:", document.forms[0].elements.fname);
console.log("Last name:", document.forms[0].elements.lname);
console.log("Submit:", document.forms[0].elements.submit);

// 4

document.forms[0].addEventListener("submit", function (event) {
  event.preventDefault();
  function createLi(text) {
    let ul = document.querySelector(".usersAnswer");
    let li = document.createElement("li");
    let textNode = document.createTextNode(text);
    li.append(textNode);
    ul.append(li);
  }
  let firstName = document.querySelector("#fname");
  let lastName = document.querySelector("#lname");
  if (!firstName.value || !lastName.value) {
    alert("Please enter something in the fields!");
  } else {
    createLi(`First name: ${firstName.value}`);
    createLi(`Last name: ${lastName.value}`);
    firstName.value = "";
    lastName.value = "";
  }
});
