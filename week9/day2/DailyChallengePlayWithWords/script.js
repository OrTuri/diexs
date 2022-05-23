"use strict";

// 1rst Daily Challenge

const sortWords = (wordsArrUppercase) => {
  return new Promise((res, rej) => {
    if (wordsArrUppercase.length > 4) res(wordsArrUppercase.sort());
    else rej("The length of the array is smaller than 4!!");
  });
};

const makeAllCaps = (wordsArr) => {
  return new Promise((res, rej) => {
    const checkIfAllString = wordsArr.every((item) => typeof item === "string");
    checkIfAllString
      ? res(wordsArr.map((item) => item.toUpperCase()))
      : rej("Not all elements in the array are strings!!");
  });
};
makeAllCaps([
  "Laptop",
  "Banana",
  "Avocado",
  "Earphones",
  "Airplane",
  "Suitcase",
]);
//   .then((res) => sortWords(res))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// 2nd Daily Challenge

let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

let userInput;

const joinWords = (morseTranslation) => {
  const container = document.createElement("div");
  let morseString = `"${userInput.join("")}" gives you: \n`;
  morseTranslation.forEach((item) => {
    morseString += `${item} \n`;
  });
  container.textContent = morseString;
  container.style.fontSize = "30px";
  container.style.margin = "auto";
  container.style.width = "fit-content";
  container.style.textAlign = "center";
  document.body.append(container);
};

const toMorse = (morseJS) => {
  return new Promise((res, rej) => {
    userInput = prompt("Please enter a word or a sentense").split("");
    const morseKeys = Object.keys(morseJS);
    const morseValues = Object.values(morseJS);
    const exist = userInput.every((item) => {
      return morseKeys.includes(item);
    });
    if (exist) {
      const convertToMorse = userInput.map((letter) => {
        return morseValues[morseKeys.indexOf(letter)];
      });
      res(convertToMorse);
    } else {
      rej("Your input can't be converted into morse code!!");
    }
  });
};

const toJs = (morseJsonObj) => {
  return new Promise((res, rej) => {
    const jsonToJsObject = JSON.parse(morseJsonObj);
    const objKeys = Object.keys(jsonToJsObject);
    objKeys.length < 1 ? rej("Object is empty!!") : res(jsonToJsObject);
  });
};

toJs(morse)
  .then((res) => toMorse(res))
  .then((res) => joinWords(res))
  .catch((err) => console.log(err));
