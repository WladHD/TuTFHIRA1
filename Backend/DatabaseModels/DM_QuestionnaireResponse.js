const mongoose = require('mongoose');
const QuestionnaireResponse = require('../FHIRResource/QuestionnaireResponse')();

const DM_QuestionnaireResponseSchema = mongoose.Schema({
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
        type: QuestionnaireResponse,
        required: true,
        default: void 0
    }
});

module.exports = mongoose.model('DM_QuestionnaireResponse', DM_QuestionnaireResponseSchema);