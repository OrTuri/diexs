"use strict";
// Exercise 1 : Calculate The Tip
// 1
// 2
function calculateTip() {
  let billAmount = Number(document.querySelector("#billamt").value);

  let serviceQuality = Number(document.querySelector("#serviceQual").value);
  let numberOfPeople = Number(document.querySelector("#peopleamt").value);

  if (isNaN(billAmount) || serviceQuality === 0) {
    alert("Something went wrong! Please fill all fields!");
    return;
  }
  if (numberOfPeople <= 1) {
    numberOfPeople = 1;
    document.querySelector("#each").style.display = "none";
  } else document.querySelector("#each").style.display = "inline";
  let total = ((billAmount * serviceQuality) / numberOfPeople).toFixed(2);
  document.querySelector("#totalTip").style.display = "block";
  document.querySelector("#tip").textContent = total;
}

document.querySelector("#calculate").addEventListener("click", function () {
  calculateTip();
});
