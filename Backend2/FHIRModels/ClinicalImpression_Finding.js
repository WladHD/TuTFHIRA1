const mongoose = require('mongoose');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
module.exports = new mongoose.Schema({
    itemCodeableConcept: {
        type: CodeableConcept,
        default: void 0
    },
    itemReference: {
        type: Reference,
        default: void 0
    },
    basis: {
        type: String,
        default: void 0
    }
}, {
    _id: false
});