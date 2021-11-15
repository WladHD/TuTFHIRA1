const express = require("express");
const router = express.Router();
const fhir_compliance = require('./middleware/fhir_compliance');

router.post('/create', fhir_compliance("ClinicalImpression"), require("./clinicalimpression/create"));
router.post('/delete', require("./clinicalimpression/delete"));
router.post('/edit', require("./clinicalimpression/edit"));
router.use('/get', require("./clinicalimpression/get"));

module.exports = router;