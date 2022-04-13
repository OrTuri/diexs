"use strict";
const input = document.querySelector("input");
const regex = /[a-zA-Z | ]/;
input.addEventListener("keydown", function (e) {
  if (!regex.test(e.key)) {
    e.preventDefault();
  }
});
