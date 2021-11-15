const DM_ClinicalImpression = require('../../DatabaseModels/DM_ClinicalImpression');
const moment = require("moment-timezone");

module.exports = async (req, res) => {
    let p = new DM_ClinicalImpression();

    p.synchronized = false;
    p.usingLocalId = true;
    p.fhir = req.body;
    p.fhir.id = String(p._id);
    p.fhir.date = moment().format("YYYY-MM-DDTHH:mm:ssZ");

    try {
        res.json({ id: (await p.save()).fhir.id });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};