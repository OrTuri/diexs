const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", express.static("./public"));
app.post(
  "/formData",
  bodyParser.urlencoded({ extended: true }),
  (req, res, next) => {
    res.status(200);
    res.set({ "Content-Type": "text/html" });
    console.log(req.body);
    res.send(req.body);
  }
);
app.listen(3000);
