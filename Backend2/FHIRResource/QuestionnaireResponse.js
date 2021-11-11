const mongoose = require('mongoose');
const Identifier = require('../FHIRModels/Identifier');
const Reference = require('../FHIRModels/Reference');
const canonical = require('../FHIRModels/canonical');
const QuestionnaireResponse_Item = require('../FHIRModels/QuestionnaireResponse_Item');
module.exports = function() {
    const QuestionnaireResponse = {
        id: {
            type: String,
            unique: true,
            index: true
        },
        resourceType: {
            type: String,
            required: true
        },
        identifier: {
            type: Identifier,
            default: void 0
        },
        basedOn: {
            type: [Reference],
            default: void 0
        },
        partOf: {
            type: [Reference],
            default: void 0
        },
        questionnaire: {
            type: canonical,
            default: void 0
        },
        status: {
            type: String,
            default: void 0
        },
        subject: {
            type: Reference,
            default: void 0
        },
        encounter: {
            type: Reference,
            default: void 0
        },
        authored: {
            type: Date,
            default: void 0
        },
        author: {
            type: Reference,
            default: void 0
        },
        source: {
            type: Reference,
            default: void 0
        },
        item: {
            type: [QuestionnaireResponse_Item],
            default: void 0
        }
    };
    const QuestionnaireResponseSchema = new mongoose.Schema(QuestionnaireResponse, {
        _id: false
    });

    return QuestionnaireResponseSchema;
}