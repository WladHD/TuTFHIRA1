const express = require("express");
const router = express.Router();

router.post('/id', require("./get/id"));

router.post('/name', require("./get/name"));

module.exports = router;