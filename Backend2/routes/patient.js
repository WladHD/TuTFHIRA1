const express = require("express");
const router = express.Router();
const fhir_compliance = require('./middleware/fhir_compliance');

router.post('/create', fhir_compliance("Patient"), require("./patient/create"));
router.delete('*', require("./patient/delete"));
router.patch('*', fhir_compliance("Patient"), require("./patient/edit"));
router.use('/get', require("./patient/get"));

module.exports = router;