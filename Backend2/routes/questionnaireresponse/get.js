const express = require("express");
const router = express.Router();

router.post('/id', require("./get/id"));
router.post('/patient', require("./get/patient"));

module.exports = router;