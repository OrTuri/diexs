"use strict";

// Exercise 1: Random Number

function random() {
  const random = Math.trunc(Math.random() * 100 + 1);
  for (let i = 0; i <= random; i++) {
    if (!(i % 2)) console.log(i);
  }
}
// random();
// Exercise 2: Capitalized Letters

const capitalize = function (string) {
  let newStr = "";
  const strArr = [];
  for (let i = 0; i < string.length; i++) {
    if (!(i % 2)) newStr += string[i].toUpperCase();
    else newStr += string[i].toLowerCase();
  }
  strArr.push(newStr);
  newStr = "";
  for (let i = 0; i < string.length; i++) {
    if (i % 2) newStr += string[i].toUpperCase();
    else newStr += string[i].toLowerCase();
  }
  strArr.push(newStr);
  return strArr;
};
console.log(capitalize("abcdef"));

// Exercise 3 : Is Palindrome?

function isPalindrome(word) {
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - 1 - i]) return false;
  }
  return true;
}
console.log(isPalindrome("redivider"));

// Exercise 4 : Biggest Number

function biggestNumberInArray(arrayNumber) {
  let biggest = arrayNumber[0];
  arrayNumber.forEach((item) => {
    if (!isNaN(item)) {
      biggest = item > biggest ? item : biggest;
    }
  });
  return biggest;
}
console.log(
  biggestNumberInArray([1, 6, 8, 4, 11, 57, 44, 322, 35, 88, "A", "BC", 77])
);

// Exercise 5: Unique Elements

function unique(array) {
  const newArray = [];
  array.forEach((item, i) => {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
}

console.log(unique([1, 2, 3, 3, 3, 3, 4, 4, 5, 6, 7, 7, 8, 9, 9, 9, 9]));
