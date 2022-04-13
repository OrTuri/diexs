"use strict";

const dragBox = document.querySelector(".active-box");
const emptySquares = document.querySelectorAll(".empty-square");

emptySquares.forEach((emptySquare) => {
  emptySquare.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  emptySquare.addEventListener("dragenter", function (e) {
    e.preventDefault();
    this.classList.add("empty-square-hover");
  });
  emptySquare.addEventListener("dragleave", function (e) {
    this.classList.remove("empty-square-hover");
  });
  emptySquare.addEventListener("drop", function (e) {
    this.append(dragBox);
    this.classList.remove("empty-square-hover");
  });
});

dragBox.addEventListener("dragstart", function (e) {
  console.log("drag start");
  setTimeout(() => (dragBox.style.display = "none"), 0);
});
dragBox.addEventListener("dragend", function (e) {
  console.log("drag end");
  setTimeout(() => (dragBox.style.display = "block"), 0);
});
