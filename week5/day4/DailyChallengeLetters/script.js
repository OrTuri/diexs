"use strict";
const input = document.querySelector("input");
const regex = /[a-zA-Z | ]/;
input.addEventListener("keyup", function (e) {
  if (!regex.test(e.key)) {
    input.value = input.value.slice(0, input.value.indexOf(e.key));
  }
});
