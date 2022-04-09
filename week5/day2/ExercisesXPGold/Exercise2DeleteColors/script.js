"use strict";
// Exercise 2: Delete Colors
let btn = document.querySelector(`input[type="button"]`);
let select = document.querySelector("#colorSelect");
function removecolor(value) {
  [...select.options].forEach((item) => {
    if (item.value === value) {
      item.remove();
    }
  });
}
btn.addEventListener("click", function (e) {
  removecolor(select.value);
});
