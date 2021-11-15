const moment = require("moment-timezone");
const DM_QuestionnaireResponse = require('../../DatabaseModels/DM_QuestionnaireResponse');

module.exports = async (req, res) => {
    const p = new DM_QuestionnaireResponse();

    p.synchronized = false;
    p.usingLocalId = true;
    p.fhir = req.body;
    p.fhir.id = String(p._id);
    p.fhir.authored = moment().format("YYYY-MM-DDTHH:mm:ssZ");

    try {
        res.json({ id: (await p.save()).fhir.id });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};