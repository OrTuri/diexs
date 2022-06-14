// Exercise 3 : Express

const express = require("express");
const app = express();
app.get("/", (req, res, next) => {
  console.log("There was a request!");
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send("<h1>Hey there!</h1>");
});
app.listen(3000);
