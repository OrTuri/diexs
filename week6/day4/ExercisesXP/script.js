"use strict";

// Exercise 1 : Find The Sum

const calcSum = (a, b) => a + b;

// Exercise 2 : Kg And Grams

// 1

function calcGrams(weight) {
  return weight * 1000;
}
console.log(calcGrams(20));

// 2

let calcGrams2 = function (weight) {
  return weight * 1000;
};
console.log(calcGrams2(20));

// 3

// The difference is that function declaration has a name attached to the function while function expression does not (it is also called annonymous function)
// Also you can not call a function expression before you declare while with function declaration you can do that.

// 4

let calcGrams3 = (weight) => weight * 1000;
console.log(calcGrams3(20));

// Exercise 3 : Fortune Teller

(function fortuneTeller(children, partner, location, job) {
  const h4 = document.createElement("h4");
  const textNode = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
  h4.append(textNode);
  document.body.append(h4);
})(6, "Dana", "England", "police officer");

// Exercise 4 : Welcome

(function addNavbarName(username) {
  const navbarUl = document.querySelector(".navbar-nav");
  const navbarLi = document.createElement("li");
  const div = document.createElement("div");
  const textNode = document.createTextNode(`Hello ${username}!`);
  const img = document.createElement("img");
  img.src =
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  img.style.height = "40px";
  div.append(img);
  div.append(textNode);
  navbarLi.append(div);
  navbarUl.append(navbarLi);
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.gap = "10px";
  navbarLi.marginLeft = "auto";
})("danny24");

// Exercise 5 : Juice Bar

(function makeJuice(beverageSize) {
  const ingredients = [];
  function addIngredients(firstIng, secondIng, thirdIng) {
    ingredients.push(firstIng, secondIng, thirdIng);
  }
  addIngredients("lemon", "mint", "orange");
  addIngredients("watermelon", "sugar", "salt");
  (function displayJuice() {
    let textNode;
    ingredients.forEach((ing, i) => {
      if (i === 0) {
        textNode = `The client wants a ${beverageSize} juice, containing ${ing},`;
      } else {
        textNode += ` ${ing}${ingredients.length - 1 === i ? "." : ","}`;
      }
    });
    const body = document.body;
    const h4 = document.createElement("h4");
    h4.append(textNode);
    body.append(h4);
  })();
})("big");
