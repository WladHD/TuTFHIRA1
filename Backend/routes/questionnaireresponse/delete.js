const DM_QuestionnaireResponse = require('../../DatabaseModels/DM_QuestionnaireResponse');

module.exports = async (req, res) => {
    if (req.body.id !== undefined)
        try {
            return res.json(await DM_QuestionnaireResponse.deleteOne({ "fhir.id": req.body.id }));
        } catch (err) {
            return res.status(500).json({ err: err });
        }

    return res.status(500).json({ err: "Bad arguments." });
};