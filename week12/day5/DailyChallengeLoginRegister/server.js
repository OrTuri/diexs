const express = require("express");
const app = express();
const cors = require("cors");
const {
  checkValidity,
  addUserToFile,
  userLoginExist,
  verifyUserPassword,
} = require("./serverModules");

app.listen(3000);

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/public/register.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.post("/registerData", (req, res) => {
  if (checkValidity(req.body, "email")) {
    res
      .status(406)
      .json(
        `The email address '${req.body.email}' is already taken! Please try a different one!`
      );
  } else if (checkValidity(req.body, "username")) {
    res
      .status(406)
      .json(
        `The username '${req.body.username}' is already taken! Please try a different one!`
      );
  } else {
    addUserToFile(req.body);
    res.status(200).json(`You have been registered successfully!`);
  }
});

app.post("/loginData", (req, res) => {
  const data = req.body;
  if (!userLoginExist(req.body)) {
    res.status(406).json(`Username '${req.body.username}' does not exist!`);
    return;
  } else {
    if (verifyUserPassword(req.body)) {
      res.status(200).json(`You have been logged in successfully!`);
    } else {
      res
        .status(406)
        .json(`Your password is incorrect! Please try again later!`);
    }
  }
});
