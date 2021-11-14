const DM_QuestionnaireResponse = require('../../../DatabaseModels/DM_QuestionnaireResponse');

module.exports = async (req, res) => {
    res.json(await DM_QuestionnaireResponse.findOne({"fhir.id" : req.body.id}));
};