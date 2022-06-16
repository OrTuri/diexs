const fs = require("fs");

// const checkUserValidity = (userObj) => {
//   const usersJsonFile = fs.readFileSync("./users.json", "utf-8");
//   const usersFileJS = JSON.parse(usersJsonFile);
//   const isEmailAlreadyExist = usersFileJS.some((item) => {
//     return item.email === userObj.email;
//   });
//   const isUsernameAlreadyExist = usersFileJS.some((item) => {
//     return item.username === userObj.username;
//   });
//   return isEmailAlreadyExist || isUsernameAlreadyExist;
// };
const usersJsonFile = fs.readFileSync("./users.json", "utf-8");
const users = JSON.parse(usersJsonFile);

const checkValidity = (userObj, property) => {
  return users.some((user) => user[property] === userObj[property]);
};

const verifyUserPassword = (userObj) => {
  const user = users.find((user) => user.username === userObj.username);
  return user.password === userObj.password;
};

const addUserToFile = (userObj) => {
  const usersFileJS = JSON.parse(usersJsonFile);
  usersFileJS.push(userObj);
  fs.writeFileSync("./users.json", JSON.stringify(usersFileJS), "utf-8");
};

const userLoginExist = (userObj) => {
  return users.some((user) => user.username === userObj.username);
};

module.exports = {
  addUserToFile,
  checkValidity,
  userLoginExist,
  verifyUserPassword,
};
