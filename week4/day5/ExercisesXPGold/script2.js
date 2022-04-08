"use strict";
let td = document.querySelectorAll(`td`);
let tr = document.querySelectorAll("tr");
tr.forEach((item, i) => {
  item.children[tr.length - 1 - i].style.backgroundColor = "red";
  item.children[tr.length - 1 - i].style.color = "#fff";
});
td.forEach((item, i) => {
  if (item.textContent[0] === item.textContent[2]) {
    item.style.backgroundColor = "red";
    item.style.color = "#fff";
  }
});
document.querySelector("table").style.margin = "auto";
document.querySelector("table").style.marginTop = "50px";
