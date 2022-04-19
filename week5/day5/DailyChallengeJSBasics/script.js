"use strict";
const body = document.querySelector("body");
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
body.append(mainContainer);
mainContainer.style.display = "grid";
mainContainer.style.gridTemplateColumns = "repeat(7, 1fr)";
mainContainer.style.gridTemplateRows = "repeat(7, 1fr)";
function createDot(column, row) {
  const dot = document.createElement("div");
  dot.style.width = "40px";
  dot.style.height = "40px";
  dot.style.backgroundColor = "#4D77FF";
  dot.style.borderRadius = "50%";
  dot.style.gridColumn = column;
  dot.style.gridRow = row;
  mainContainer.append(dot);
  mainContainer.style.justifyContent = "center";
  mainContainer.style.justifyItems = "center";
  mainContainer.style.rowGap = "20px";
  mainContainer.style.columnGap = "10px";
  mainContainer.style.width = "500px";
  mainContainer.style.margin = "50px auto";
}
for (let i = 2; i < 10; i++) {
  createDot(2, i);
  createDot(6, i);
}
for (let i = 3; i < 6; i++) {
  createDot(i, 1);
  createDot(i, 5);
}
