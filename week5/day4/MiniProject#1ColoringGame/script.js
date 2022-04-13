"use strict";
const colorsContainer = document.querySelector(".colors-container");
const drawingContainer = document.querySelector(".drawing-container");
const colors = [
  "#eb3434",
  "#eb7a34",
  "#ebc034",
  "#ebdc34",
  "#baeb34",
  "#7aeb34",
  "#34eb89",
  "#34ebd0",
  "#34d0eb",
  "#34a2eb",
  "#346beb",
  "#3443eb",
  "#5f34eb",
  "#8934eb",
  "#c334eb",
  "#eb34d3",
  "#eb3489",
  "#eb3459",
  "#b8b8b8",
  "#4f4f4f",
  "#000",
];
function createColorBox(backgroundColor) {
  let color = document.createElement("div");
  color.classList.add("color-box");
  color.dataset.color = backgroundColor;
  color.style.backgroundColor = `${backgroundColor}`;
  colorsContainer.append(color);
}
colors.forEach((item) => {
  createColorBox(item);
});
function createDrawingBox() {
  let drawingBox = document.createElement("div");
  drawingBox.classList.add("drawing-box");
  drawingContainer.append(drawingBox);
  return drawingBox;
}
for (let i = 0; i < 1800; i++) {
  createDrawingBox();
}
let currentColor;
const colorBoxes = document.querySelectorAll(".color-box");
const drawingBoxes = document.querySelectorAll(".drawing-box");
colorBoxes.forEach((colorBox) => {
  colorBox.addEventListener("click", function (e) {
    currentColor = this.dataset.color;
  });
});
let mouseDown = false;
drawingContainer.addEventListener("mousedown", function (e) {
  e.preventDefault();
  if (currentColor) mouseDown = true;
  else alert("You need to select a color first!!");
});
document.body.addEventListener("mouseup", function (e) {
  mouseDown = false;
});
drawingBoxes.forEach((drawingBox) => {
  drawingBox.addEventListener("mouseover", function (e) {
    if (mouseDown && currentColor) {
      this.style.backgroundColor = currentColor;
    }
  });
});
const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const colors = [];
  drawingBoxes.forEach(function (drawingBox) {
    colors.push(drawingBox.style.backgroundColor);
    drawingBox.style.backgroundColor = "";
  });
  console.log(colors);
  if (colors.every((elem) => elem === "")) alert("There is nothing to clear!");
});
