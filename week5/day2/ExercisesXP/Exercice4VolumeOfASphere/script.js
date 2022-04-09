"use strict";

function calcVolume() {
  let radius = document.querySelector("#radius");
  let volume = (4 / 3) * Math.PI * Math.pow(Number(radius.value), 3);
  return volume;
}
document.forms.MyForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let radius = document.querySelector("#radius");
  let volume = document.querySelector("#volume");
  if (isNaN(Number(radius.value))) {
    alert("Invalid radius!");
  } else volume.value = calcVolume().toExponential(5);
});
