const fs = require("fs");

const textFile = fs.readFileSync("./text.txt", "utf-8");
console.log(textFile);
