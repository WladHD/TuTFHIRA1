const mongoose = require('mongoose');
const Patient = require('../FHIRResource/Patient')();

const DM_PatientSchema = mongoose.Schema({
    synchronized: {
        type: Boolean,
        required: true,
        default: false
    },

    usingLocalId: {
        type: Boolean,
        required: true,
        default: true
    },

    fhir: {
        type: Patient,
        required: true,
        default: void 0
    }
});

module.exports = mongoose.model('DM_Patient', DM_PatientSchema);