const mongoose = require('mongoose');
const Attachment = require('./Attachment');
const Coding = require('./Coding');
//const Quantity = require('./Quantity');
const Reference = require('./Reference');
const QuestionnaireResponse_Item = require('./QuestionnaireResponse_Item');
module.exports = new mongoose.Schema({
    valueBoolean: {
        type: Boolean,
        default: void 0
    },
    valueDecimal: {
        type: Number,
        default: void 0
    },
    valueInteger: {
        type: Number,
        default: void 0
    },
    valueDate: {
        type: String,
        default: void 0
    },
    valueDateTime: {
        type: String,
        default: void 0
    },
    valueTime: {
        type: String,
        default: void 0
    },
    valueString: {
        type: String,
        default: void 0
    },
    valueUri: {
        type: String,
        default: void 0
    },
    valueAttachment: {
        type: Attachment,
        default: void 0
    },
    valueCoding: {
        type: Coding,
        default: void 0
    },
    /*valueQuantity: {
        type: Quantity,
        default: void 0
    },*/
    valueReference: {
        type: Reference,
        default: void 0
    },
    item: {
        type: [QuestionnaireResponse_Item],
        default: void 0
    }
}, {
    _id: false
});