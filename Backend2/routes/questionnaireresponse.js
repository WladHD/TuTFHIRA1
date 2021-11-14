const express = require("express");
const router = express.Router();
const fhir_compliance = require('./middleware/fhir_compliance');

router.post('/create', fhir_compliance("QuestionnaireResponse"), require("./questionnaireresponse/create"));
router.use('/get', require("./questionnaireresponse/get"));

module.exports = router;