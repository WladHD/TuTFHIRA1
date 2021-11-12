const DM_ClinicalImpression = require('../../DatabaseModels/DM_ClinicalImpression');

module.exports = async (req, res) => {
    try {
        res.json(await DM_ClinicalImpression.updateOne({ "fhir.id": req.body.id }, {
            $set: {
                "fhir.summary": req.body.summary
            }
        }));
        return;
    } catch (err) {
        return res.status(500).json({ err: err });
    }
};