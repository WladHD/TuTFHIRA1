const DM_Patient = require('../../DatabaseModels/DM_Patient');

module.exports = async (req, res) => {
    try {
        res.json(await DM_Patient.updateOne({ "fhir.id": req.body.id }, {
            $set: {
                "fhir.address": req.body.address,
                "fhir.birthDate": req.body.birthDate,
                "fhir.gender": req.body.gender,
                "fhir.name": req.body.name,
                "fhir.telecom": req.body.telecom
            }
        }));
        return;
    } catch (err) {
        return res.status(500).json({ err: err });
    }
};