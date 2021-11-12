const DM_ClinicalImpression = require('../../../DatabaseModels/DM_ClinicalImpression');

module.exports = async (req, res) => {
    res.json(await DM_ClinicalImpression.find({"fhir.subject.reference" : req.body.id}).sort( { "fhir.date": -1 } ));
};