"use strict";
const carousel = document.querySelector(".carousel");
const carouselImages = document.querySelectorAll(".portfolio-img");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
let counter = 0;
let size = carouselImages[0].clientWidth;
carousel.style.transform = `translateX(${size * counter}px)`;
carouselImages.forEach((img) => {
  img.style.transition = "all 0.7s";
});
btnNext.addEventListener("click", function (e) {
  if (counter > 4) {
    counter = 0;
  } else {
    counter++;
  }
  carouselImages.forEach((img) => {
    img.style.transform = `translateX(${-size * counter}px)`;
  });
});
btnPrev.addEventListener("click", function (e) {
  counter--;
  if (counter < 0) {
    counter = 5;
  }
  carouselImages.forEach((img) => {
    img.style.transform = `translateX(${-size * counter}px)`;
  });
});
