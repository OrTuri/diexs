"use strict";
// Exercise 1 : Play A Guessing Game
// First part

function playTheGame() {
  const userConfirm = confirm("Would you like to play the game?");
  let userNum;
  let computerNum;
  if (!userConfirm) alert("No problems! Goodbye! 🖐️");
  else {
    userNum = Number(prompt("Please enter a number between 0 and 10"));
    if (isNaN(userNum) || userNum < 0 || userNum > 10)
      alert("This is not a valid number! Goodbye! 🥺");
    else {
      computerNum = Math.trunc(Math.random() * 11);
      console.log(userNum, computerNum);
    }
  }
  test(userNum, computerNum);
}

function test(userNum, computerNum) {
  let attempts = 0,
    won;
  if (userNum === computerNum) {
    alert("Winner! 🥳🎈🥂🎆🎆🎇🎇");
  } else {
    while (attempts < 2) {
      attempts++;
      if (userNum > computerNum) {
        userNum = Number(
          prompt(
            "Your number is bigger than the computer number\nPlease enter a new number and try again! 🙂"
          )
        );
      } else if (userNum < computerNum) {
        userNum = Number(
          prompt(
            "Your number is smaller than the computer number\nPlease enter a new number and try again! 🙂"
          )
        );
      }
      if (userNum === computerNum) {
        alert("Winner! 🥳🎈🥂🎆🎆🎇🎇");
        won = true;
        break;
      }
    }
  }

  console.log(`Attempts: ${attempts}`);

  if (attempts > 1 && !won) alert("You ran out of attempts! Game over! 😩");
}
