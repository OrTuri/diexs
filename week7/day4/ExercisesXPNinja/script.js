"use strict";

class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();

// console.log can't be used as a propery of an object so the "console.log("I'm a bird. 🦢")" and "console.log("I'm pink. 🌸")" will be executed immidietley but won't be a part of the Bird and Flamingo classes.
