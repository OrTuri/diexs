const fs = require("fs");

const calcPosition = () => {
  const file = fs.readFileSync("./RightLeft.txt", "utf-8");
  let position = 0;
  let reached = false;
  for (let i = 0; i < file.length; i++) {
    if (position === -1 && !reached) {
      console.log(`reached position -1 at ${i}`);
      reached = true;
    }
    position += file[i] === ">" ? 1 : -1;
  }
  console.log(`Position: ${position}`);
};

calcPosition();
