const mongoose = require('mongoose');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
module.exports = new mongoose.Schema({
    code: {
        type: CodeableConcept,
        default: void 0
    },
    item: {
        type: [Reference],
        default: void 0
    }
}, {
    _id: false
});