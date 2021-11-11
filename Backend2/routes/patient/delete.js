const DM_Patient = require('../../DatabaseModels/DM_Patient');

module.exports = async (req, res) => {
    if (req.body.patientId !== undefined)
        try {
            res.json(await DM_Patient.deleteOne({ "fhir.id": req.body.patientId }));
            return;
        } catch (err) {
            return res.status(500).json({ err: err });
        }

    return res.status(500).json({ err: "Bad arguments." });
};