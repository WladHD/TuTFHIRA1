const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Fhir = require('fhir').Fhir;

const Patient = require('../FHIRResource/Patient');


router.get('/', (req, res) => {
    res.send("jo");
});

router.post('/', (req, res) => {
    console.log(new Fhir().validate(req.body))
    const p = new Patient(req.body);

    p.save()
        .then(data => { id: res.json(data.fhir.id) })
        .catch(err => { res.json({ message: err }); console.log(err) })
});

module.exports = router;