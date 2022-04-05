"use strict";
// const num = Number(prompt("Please enter a number"));
const num = 99;
let down = 0;

for (let i = num; i > 1; i -= down) {
  console.log(`${i} bottles of beer on the wall\n${i} bottles of beer`);
  down++;
  console.log(
    `take ${down} down, pass ${down > 1 ? "them" : "it"} around\n${
      i - down
    } bottles of beer on the wall`
  );
  console.log(`----------------------------------------------------`);
}
