const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/aboutMe/:hobby", (req, res, next) => {
  if (!isNaN(req.params.hobby)) {
    res.status(404).send("<h1>There was an error!! 🚫</h1>");
    return;
  }
  res.send(`<h1>The hobby paramater is: ${req.params.hobby}</h1>`);
});

app.use("/pic", express.static("./public"));
app.use("/form", express.static("./public/form"));

app.use("/formData", bodyParser.urlencoded({ extended: true }));
app.post("/formData", (req, res, next) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send(
    `<h1>Your email is: ${req.body.email} and your message is: ${req.body.message}</h1>`
  );
});

app.listen(3000);
