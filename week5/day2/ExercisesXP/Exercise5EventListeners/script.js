"use strict";

let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  this.style.display = "block";
  this.style.margin = "100px auto";
  this.style.width = "200px";
  this.style.height = "100px";
  this.style.borderRadius = "30px";
  this.style.border = "1px solid #000";
  this.style.fontSize = "20px";
  this.style.boxShadow = "10px 10px 20px #000";
});

btn.addEventListener("mouseover", function () {
  this.style.backgroundColor = "red";
  this.style.color = "#fff";
});
btn.addEventListener("mouseout", function () {
  this.style.backgroundColor = "green";
  this.style.color = "#fff";
});

btn.addEventListener("keydown", function (event) {
  this.style.width = "600px";
  this.style.height = "400px";
  this.style.fontSize = "90px";
});
