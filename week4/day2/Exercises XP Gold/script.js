"use strict";

// Exercise 1 : Is_Blank

function notBoolean(str) {
  if (Boolean(str)) return false;
  else return true;
}
console.log(notBoolean(""));

// Exercise 2 : Abbrev_name

function abbrevName(name) {
  const str = name.split(" ");

  console.log(`${str[0]} ${str[1][0]}.`);
}
abbrevName("Danny Roy");

// Exercise 3 : SwapCase

function capitalFirstLetter(sentence) {
  const strArr = sentence.split(" ");
  strArr.forEach((item, i) => {
    strArr[i] = item.toLowerCase();
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  });
  const str = strArr.join(" ");
  console.log(str);
}
capitalFirstLetter("hElLo wOrLd, hOW aRe yOu tODaY?");

// Exercise 4 : Omnipresent Value

function isOmnipresent(array, num) {
  const arrLength = array.length;
  let count = 0;
  array.forEach((item, i) => {
    if (item.includes(num)) count++;
  });
  if (count === arrLength) return true;
  else return false;
}
console.log(
  isOmnipresent(
    [
      [1, 2, 4],
      [8, 3, 4, 5],
      [2, 7, 6, 9, 1],
      [2, 3, 4, 8, 6, 1],
    ],
    4
  )
);
