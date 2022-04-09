"use strict";

// Exercise 1 : Select A Kind Of Music

// 1

let select = document.querySelector("select");
let h1 = document.createElement("h1");
document.body.append(h1);

select.addEventListener("click", function (e) {
  h1.textContent = select.value;
});

// 2

let newOption = document.createElement("option");
newOption.text = "Classic";
newOption.value = "Classic";
select.append(newOption);

// 3

select.value = "Classic";
