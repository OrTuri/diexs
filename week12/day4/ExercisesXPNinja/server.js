const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const shoppingList = [
  { id: 1, item: "Bread" },
  { id: 2, item: "Coke" },
  { id: 3, item: "Meat" },
  { id: 4, item: "Fish" },
  { id: 5, item: "Milk" },
];

app.set("view engine", "ejs");
app.get("/items", (req, res, next) => {
  // res.status(200);
  // res.set({ "Content-Type": "text/html" });
  // res.sendFile(__dirname + "/public/index.html");
  res.render("./public/index", { shoppingList });
});

app.post(
  "/item",
  bodyParser.urlencoded({ extended: true }),
  (req, res, next) => {
    shoppingList.push({ id: shoppingList.at(-1).id + 1, item: req.body.item });
    console.log(shoppingList);
    // res.send(
    //   `<h1>The item ${req.body.item} has been inserted into the shopping list!</h1>`
    // );
    res.render("./public/afterSubmit", { item: req.body.item });
  }
);

app.get("/:id", (req, res, next) => {
  if (shoppingList.some((item) => item.id === Number(req.params.id))) {
    const objItem = [
      shoppingList.find((item) => item.id === Number(req.params.id)),
    ];
    res.render("./public/index", { shoppingList: objItem });
    return;
  }
  res.status(404);
  res.set({ "Content-Type": "text/html" });
  res.sendFile(__dirname + "/views/public/404.html");
});

app.listen(3000);
