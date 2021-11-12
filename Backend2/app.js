/*const fhirgen = require('fhir-mongoose-schema-generator');

fhirgen("QuestionnaireResponse" , {typePath : './FHIRModels' , 'resourcePath': './FHIRResource' , cwd : process.cwd()});*/

const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// ROUTES
app.use('/patient', require('./routes/patient'));
app.use('/clinicalimpression', require('./routes/clinicalimpression'));

// DATABASE
mongoose.connect('mongodb+srv://testuser:testpassword@tut.s5z2h.mongodb.net/TuT?retryWrites=true&w=majority', () => console.log("Database connected."));


// START SERVER
app.listen(3030, () => "REST-API listening at 3030.");