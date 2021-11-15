const DM_Patient = require('../../DatabaseModels/DM_Patient');
const DM_ClinicalImpression = require('../../DatabaseModels/DM_ClinicalImpression');
const DM_QuestionnaireResponse = require('../../DatabaseModels/DM_QuestionnaireResponse');

module.exports = async (req, res) => {
    if (req.body.id !== undefined)
        try {
            await DM_ClinicalImpression.deleteMany({ "fhir.subject.reference": req.body.id });
            await DM_QuestionnaireResponse.deleteMany({ "fhir.subject.reference": req.body.id });
            await DM_Patient.deleteOne({ "fhir.id": req.body.id });
            return res.status(200).json({ status: "ok" });
        } catch (err) {
            return res.status(500).json({ err: err });
        }

    return res.status(500).json({ err: "Bad arguments." });
};