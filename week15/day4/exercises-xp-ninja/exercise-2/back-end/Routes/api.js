const express = require("express");
const router = express.Router();
const { getCustomers } = require("../Controllers/api");

router.get("/customers", getCustomers);

module.exports = router;
