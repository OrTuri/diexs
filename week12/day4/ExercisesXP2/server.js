// Exercise 1 : Express & JSON

const express = require("express");
const app = express();

app.use(express.static("./public"));

app.get("/json", (req, res, next) => {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  console.log(JSON.stringify(user));
  res.status(200);
  //   res.set({ "Content-Type": "application/json" });
  //   res.send(JSON.stringify(user));
  res.json(user);
});
app.listen(3000);

// Exercise 2 : Express & Parameters

const app2 = express();

app2.get("/:id", (req, res, next) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.json(req.params);
  console.log(req.params);
});
// app2.listen(3000);

// Exercise 3: Express & Static Files

const app3 = express();

app3.use(express.static("./public"));
// app3.listen(3000);
