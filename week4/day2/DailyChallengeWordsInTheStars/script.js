"use strict";

function displayWords() {
  const userWords = prompt("Please enter a few words seperated by commas");
  const userWordsArr = userWords.split(",");
  const maxStr =
    userWordsArr.reduce((a, b) => {
      return a.length > b.length ? a : b;
    }).length + 3;
  console.log("* ".repeat(maxStr));
  userWordsArr.forEach((item, i) => {
    console.log(`*  ${item}${" ".repeat(12 - item.length)}*`);
  });
  console.log("* ".repeat(maxStr));
}
displayWords();
