"use strict";

// 1

for (let i = 1; i <= 6; i++) {
  console.log("* ".repeat(i));
}

// 2

for (let i = 0; i < 6; i++) {
  for (let x = i + 1; x <= i + 1; x++) {
    console.log("* ".repeat(x));
  }
}
