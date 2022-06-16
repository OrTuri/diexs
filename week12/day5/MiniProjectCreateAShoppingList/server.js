const express = require("express");
const app = express();

const shoppingList = [];

app.listen(3000);

app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/form", (req, res) => {
  const itemObj = req.body;
  shoppingList.push(itemObj);
  res.status(200);
  res.json(shoppingList);
});
app.get("/shoppingList", (req, res) => {
  res.render("index", { shoppingList });
});
