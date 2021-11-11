const mongoose = require('mongoose');
const Identifier = require('../FHIRModels/Identifier');
const CodeableConcept = require('../FHIRModels/CodeableConcept');
const Reference = require('../FHIRModels/Reference');
const Period = require('../FHIRModels/Period');
const ClinicalImpression_Investigation = require('../FHIRModels/ClinicalImpression_Investigation');
const ClinicalImpression_Finding = require('../FHIRModels/ClinicalImpression_Finding');
const Annotation = require('../FHIRModels/Annotation');
module.exports = function() {
    const ClinicalImpression = {
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
            type: [Identifier],
            default: void 0
        },
        status: {
            type: String,
            default: void 0
        },
        statusReason: {
            type: CodeableConcept,
            default: void 0
        },
        code: {
            type: CodeableConcept,
            default: void 0
        },
        description: {
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
        effectiveDateTime: {
            type: String,
            default: void 0
        },
        effectivePeriod: {
            type: Period,
            default: void 0
        },
        date: {
            type: Date,
            default: void 0
        },
        assessor: {
            type: Reference,
            default: void 0
        },
        previous: {
            type: Reference,
            default: void 0
        },
        problem: {
            type: [Reference],
            default: void 0
        },
        investigation: {
            type: [ClinicalImpression_Investigation],
            default: void 0
        },
        protocol: {
            type: [String],
            default: void 0
        },
        summary: {
            type: String,
            default: void 0
        },
        finding: {
            type: [ClinicalImpression_Finding],
            default: void 0
        },
        prognosisCodeableConcept: {
            type: [CodeableConcept],
            default: void 0
        },
        prognosisReference: {
            type: [Reference],
            default: void 0
        },
        supportingInfo: {
            type: [Reference],
            default: void 0
        },
        note: {
            type: [Annotation],
            default: void 0
        }
    };
    const ClinicalImpressionSchema = new mongoose.Schema(ClinicalImpression, {
        _id: false
    });

    return ClinicalImpressionSchema;
}