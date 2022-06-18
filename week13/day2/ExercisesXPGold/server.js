const express = require("express");
const app = express();
const { updateJsonFile, getDataFromFile } = require("./serverUtils");

const shoppingList = [];

app.listen(3000);

app.set("view engine", "ejs");

app.use(express.json());

app.use("/", express.static("./public"));

// app.get("/items", (req, res) => {
//   const updatedShoppingList = JSON.parse(
//     getDataFromFile("./shoppingList.json")
//   );

//   res.render("items", { updatedShoppingList });
// });

// app.get("/items/:id", (req, res) => {
//   const item = [
//     JSON.parse(getDataFromFile("./shoppingList.json"))[req.params.id],
//   ];
//   if (item[0]) {
//     res.render("items", { updatedShoppingList: item });
//   } else {
//     res.status(404).send("<h1>Page not found!</h1>");
//   }
// });

app.get("/items", (req, res) => {
  res.sendFile(__dirname + "/public/items.html");
});

app.post("/getList", (req, res) => {
  res.send(getDataFromFile("./shoppingList.json"));
});

app.post("/items", (req, res) => {
  updateJsonFile("./shoppingList.json", req.body);
  const updatedShoppingList = getDataFromFile("./shoppingList.json");
  res.send(updatedShoppingList);
});
