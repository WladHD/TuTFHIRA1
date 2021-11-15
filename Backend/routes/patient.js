const express = require("express");
const router = express.Router();
const fhir_compliance = require('./middleware/fhir_compliance');

router.post('/create', fhir_compliance("Patient"), require("./patient/create"));
router.use('/get', require("./patient/get"));
router.post('/delete', require("./patient/delete"));
router.post('/edit', fhir_compliance("Patient"), require("./patient/edit"));

module.exports = router;