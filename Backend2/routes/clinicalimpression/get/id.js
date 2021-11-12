const DM_ClinicalImpression = require('../../../DatabaseModels/DM_ClinicalImpression');

module.exports = async (req, res) => {
    res.json(await DM_ClinicalImpression.findOne({"fhir.id" : req.body.id}));
};