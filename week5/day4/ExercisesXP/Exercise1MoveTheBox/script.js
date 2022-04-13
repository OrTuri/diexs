"use strict";

function myMove() {
  const box = document.getElementById("animate");
  box.style.left = `0`;
  let i = 1;
  function moveDiv() {
    box.style.setProperty("left", `${i}%`);
    box.style.setProperty("top", `${i}%`);
    i++;
    if (i > 88) {
      clearInterval(inter);
      i = 1;
    }
  }
  let inter = setInterval(moveDiv, 10);
}
