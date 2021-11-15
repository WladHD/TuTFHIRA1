const mongoose = require('mongoose');
const ClinicalImpression = require('../FHIRResource/ClinicalImpression')();

const DM_ClinicalImpressionSchema = mongoose.Schema({
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
        type: ClinicalImpression,
        required: true,
        default: void 0
    }
});

module.exports = mongoose.model('DM_ClinicalImpression', DM_ClinicalImpressionSchema);