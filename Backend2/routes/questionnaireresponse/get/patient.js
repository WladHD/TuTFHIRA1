const DM_QuestionnaireResponse = require('../../../DatabaseModels/DM_QuestionnaireResponse');

module.exports = async (req, res) => {
    res.json(await DM_QuestionnaireResponse.find({ "fhir.subject.reference": req.body.id }).sort({ "fhir.authored": -1 }));
};