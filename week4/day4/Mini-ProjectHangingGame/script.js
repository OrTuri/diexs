"use strict";
let word = prompt("Please enter a word with at least 8 characters");
let wordLength = word.length;
// Making sure the user word input has at least 8 characters
while (wordLength < 8) {
  word = prompt(
    "Your word is too short!!\nPlease enter a word with at least 8 characters!"
  );
  wordLength = word.length;
}
word = word.toLowerCase();
let wordArray = word.split("");
let asterisksArray = "*".repeat(wordLength).split("");
let chances = 10;
let guess;
let won = false;
while (chances > 0 && !won) {
  // Displaying the asterisks
  console.log(asterisksArray.join(" "));
  // Asking the user for a letter (guess)
  guess = prompt("Please guess! (enter only ONE letter!)");
  // Checking if the user's guess is correct and if it is then replacing the asterisks with the correct letters
  if (wordArray.includes(guess)) {
    wordArray.forEach((item, i) => {
      if (item === guess) {
        asterisksArray[i] = guess;
      }
    });
    // If the user's guess is incorrect then removing 1 from the chances variable, displaying a message in the console log
  } else {
    chances--;
    if (chances > 0) {
      console.log(
        `You are incorrect!\nYou have ${chances} more ${
          chances > 1 ? "chances" : "chance"
        }!`
      );
    } else {
      console.log(`You lose!! ☹️`);
    }
  }
  // Checking if the user has won
  if (!asterisksArray.includes("*")) {
    won = true;
    console.log(asterisksArray.join(" "));
    console.log(`You won!! 🥳🥂🎆🎇🎈🍾`);
  }
}
