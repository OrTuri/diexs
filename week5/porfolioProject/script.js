"use strict";
const carousel = document.querySelector(".carousel");
const carouselImages = document.querySelectorAll(".portfolio-img");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
let counter = 0;
let size = carouselImages[0].clientWidth;
carousel.style.transform = `translateX(${size * counter}px)`;
btnNext.addEventListener("click", function (e) {
  counter++;
  carousel.style.transform = `translateX(${-size * counter}px)`;
});
btnPrev.addEventListener("click", function (e) {
  counter--;
  carousel.style.transform = `translateX(${-size * counter}px)`;
});
