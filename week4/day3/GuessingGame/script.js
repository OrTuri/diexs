"use strict";
function askUserNumber() {
  let number = Number(prompt("Please enter a number between 1 and 10"));
  if (!numberCheck(number)) {
    askUserNumber();
  }
  return number;
}
function numberCheck(number) {
  if (isNaN(number)) {
    alert("You didn't enter a number!");
  } else if (number < 1 || number > 10) {
    alert("Your number is not in range!");
  } else return true;
}
function test(randomNumber, userNumber) {
  if (randomNumber === userNumber) {
    alert("You won the game! 🍾🎈🎇🎆🥂");
    return true;
  } else if (userNumber > randomNumber) {
    alert("Your guess is too high ☝️");
  } else {
    alert("Your guess is too low 👇");
  }
}
function playTheGame() {
  const userConfirm = confirm("Do you want to play the game?");
  if (userConfirm) {
    const randomNumber = Math.trunc(Math.random() * (10 - 1) + 1);
    let chances = 3;
    console.log("random number", randomNumber);
    let userNumber = askUserNumber();
    let testResult = test(randomNumber, userNumber);
    while (!testResult) {
      if (!testResult && chances) {
        chances--;
        if (chances) {
          alert(
            `You have ${chances} more ${chances > 1 ? "chances" : "chance"}!`
          );
          userNumber = askUserNumber();
          testResult = test(randomNumber, userNumber);
        }
      } else {
        alert("Game over! You lose! ☹️☹️☹️");
        break;
      }
    }
  } else {
    alert("Okay! Goodbye! 👋");
  }
}
