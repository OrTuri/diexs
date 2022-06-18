// Exercise 2
// 1
const fs = require("fs");

const createAndWriteToFile = (content) => {
  fs.writeFileSync("./newFile.txt", content, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

createAndWriteToFile("Hello world!");

// 2

const addToFile = (content) => {
  fs.appendFileSync("./newFile.txt", content, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

addToFile("Some more text!");

// 3

const deleteFile = () => {
  fs.unlink("./newFile.txt", (err) => {
    if (err) {
      console.log(err);
    }
  });
};

deleteFile();
