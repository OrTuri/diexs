const express = require("express");
const router = express.Router();
const { getHello, postHello } = require("../Controllers/api");

router.get("/hello", getHello);

router.post("/world", postHello);

module.exports = { router };
