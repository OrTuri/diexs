const express = require("express");
const app = express();
const { router } = require("./Routes/api");
const cors = require("cors");

app.listen(5000);

// app.use(cors());
app.use("/", (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});
app.use("/", express.text());
app.use("/api", router);
