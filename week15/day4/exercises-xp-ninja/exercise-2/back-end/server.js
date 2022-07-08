const express = require("express");
const app = express();
const cors = require("cors");

const apiRouter = require("./Routes/api");

app.listen(5000);

app.use(cors());
app.use("/api", apiRouter);
