const mongoose = require('mongoose');
const QuestionnaireResponse_Answer = require('./QuestionnaireResponse_Answer');
const QuestionnaireResponse_Item = require('./QuestionnaireResponse_Item');
module.exports = new mongoose.Schema({
    linkId: {
        type: String,
        default: void 0
    },
    definition: {
        type: String,
        default: void 0
    },
    answer: {
        type: [QuestionnaireResponse_Answer],
        default: void 0
    },
    item: {
        type: [QuestionnaireResponse_Item],
        default: void 0
    }
}, {
    _id: false
});