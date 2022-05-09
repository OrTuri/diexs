"use strict";
const isAnagram = (str1, str2) => {
  let status = false;
  const str1Obj = str1
    .replaceAll(" ", "")
    .toLowerCase()
    .split("")
    .reduce((acc, cur) => {
      acc.hasOwnProperty(cur) ? acc[cur]++ : (acc[cur] = 1);
      return acc;
    }, {});
  const str2Obj = str2
    .replaceAll(" ", "")
    .toLowerCase()
    .split("")
    .reduce((acc, cur) => {
      acc.hasOwnProperty(cur) ? acc[cur]++ : (acc[cur] = 1);
      return acc;
    }, {});
  for (let letter in str1Obj) {
    if (str1Obj[letter] !== str2Obj[letter]) {
      status = false;
      break;
    } else status = true;
  }
  if (status) console.log("It's an Anagram!");
  else console.log("It's NOT an Anagram!");
};
isAnagram("Astronomer", "Moon starer");
