const express = require("express");
const axios = require("axios").default;

const app = express();

app.listen(3000);
const getRobots = async () => {
  try {
    const robots = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return robots.data;
  } catch (err) {
    console.log(err);
  }
};

app.use("/", express.static("./public"));

app.get("/robots", (req, res) => {
  getRobots()
    .then((robots) => res.send(robots))
    .catch((err) => console.log(err));
});
