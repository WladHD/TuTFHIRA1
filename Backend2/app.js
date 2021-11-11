/*const fhirgen = require('fhir-mongoose-schema-generator');

fhirgen("QuestionnaireResponse" , {typePath : './FHIRModels' , 'resourcePath': './FHIRResource' , cwd : process.cwd()});*/

const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// ROUTES
app.use('/test', require('./routes/test'));
app.use('/patient', require('./routes/patient'));

// DATABASE
mongoose.connect('mongodb+srv://testuser:testpassword@tut.s5z2h.mongodb.net/TuT?retryWrites=true&w=majority', () => console.log("Database connected."));


// START SERVER
app.listen(3030, () => "REST-API listening at 3030.");