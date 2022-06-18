const fs = require("fs");

const updateJsonFile = (filePath, data) => {
  try {
    const jsonFile = fs.readFileSync(filePath, "utf-8");
    if (!!jsonFile) {
      const jsFile = JSON.parse(jsonFile);
      jsFile.push(data);
      fs.writeFileSync(filePath, JSON.stringify(jsFile));
    } else {
      fs.writeFileSync(filePath, JSON.stringify([data]));
    }
  } catch (err) {
    console.log(err);
  }
};

const getDataFromFile = (filePath) => {
  return fs.readFileSync(filePath, "utf-8");
};

module.exports = {
  updateJsonFile,
  getDataFromFile,
};
