"use strict";

function askUserWords() {
  let words = prompt("Please enter a few words seperated by commas");
  while (!words.includes(",")) {
    alert("Something went wrong! Please try again!");
    words = prompt("Please enter a few words seperated by commas");
  }
  return words;
}

function displayWords() {
  const userWords = askUserWords();
  const userWordsArr = userWords.split(",");
  const maxStr = userWordsArr.reduce((a, b) => {
    return a.length > b.length ? a : b;
  }).length;
  let toPrint = "";

  userWordsArr.forEach((item, i) => {
    if (i === 0) {
      toPrint += "*".repeat(maxStr + 4) + "\n";
      toPrint += "* " + item + " ".repeat(maxStr - item.length) + " *" + "\n";
    } else if (i === userWordsArr.length - 1) {
      toPrint += "* " + item + " ".repeat(maxStr - item.length) + " *" + "\n";
      toPrint += "*".repeat(maxStr + 4) + "\n";
    } else {
      toPrint += "* " + item + " ".repeat(maxStr - item.length) + " *" + "\n";
    }
  });
  console.log(toPrint);
}
displayWords();
