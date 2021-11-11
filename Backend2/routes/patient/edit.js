const DM_Patient = require('../../DatabaseModels/DM_Patient');

module.exports = async (req, res) => {
    if (req.body.resourceType !== "Patient" || req.body.id === undefined)
        return res.status(500).json({ err: "FHIR Resource has to be a patient." });

    try {
        res.json(await DM_Patient.updateOne({ "fhir.id": req.body.id }, {
            $set: {
                fhir: req.body
            }
        }));
        return;
    } catch (err) {
        return res.status(500).json({ err: err });
    }
};