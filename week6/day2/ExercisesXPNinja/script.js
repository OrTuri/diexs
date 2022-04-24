"use strict";

// Exercise 1 : Menu

let menu = [
  {
    type: "starter",
    name: "Houmous with Pita",
  },
  {
    type: "starter",
    name: "Vegetable Soup with Houmous peas",
  },
  {
    type: "dessert",
    name: "Chocolate Cake",
  },
];

// 1

const isDessert = menu.some((item) => item.type === "dessert");

// 2

const isAllStarters = menu.every((item) => item.type === "starter");

// 3

const isMainCourse = menu.some((item) => item.type === "main course");
if (!isMainCourse) {
  menu.push({
    type: "main course",
    name: "Pasta with meat balls",
  });
}

let vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];

menu.forEach((item) => {
  let vegan = false;
  item.name.split(" ").forEach((nameItem) => {
    if (vegetarian.includes(nameItem.toLowerCase())) vegan = true;
  });
  if (vegan) item.vegetarian = true;
  else item.vegetarian = false;
});

// Exercise 2 : Chop Into Chunks

const chopString = (string, num = 1) => {
  const arr = [];
  for (let i = 0; i < string.length; i = i + num) {
    arr.push(string.slice(i, i + num));
  }
  return arr;
};

// Exercise 3 : You Said String ?

const searchWord = (string, word) => {
  let counter = 0;
  string.split(" ").forEach((stringWord) => {
    if (stringWord === word) counter++;
  });
  return counter ? counter : false;
};

// Exercise 4 : Reverse Array

const reverseArray = (array) => {
  const tempArray = array.slice();
  array.forEach((item, i) => {
    array[i] = tempArray[array.length - i - 1];
  });
};
