"use strict";

const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// 1

let numbersString = numbers.toString();

// 2

let numbersString2 = numbers.join("+");

// 3

function sortNumsArr(array) {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let x = i + 1; x < array.length; x++) {
      if (array[i] > array[x]) {
        temp = array[x];
        array[x] = array[i];
        array[i] = temp;
      }
    }
  }
  console.log(`The sorted array is: ${array}`);
}
sortNumsArr(numbers);
