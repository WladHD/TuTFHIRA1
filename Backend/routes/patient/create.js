const DM_Patient = require('../../DatabaseModels/DM_Patient');

module.exports = async (req, res) => {
    const p = new DM_Patient();

    p.synchronized = false;
    p.usingLocalId = true;
    p.fhir = req.body;
    p.fhir.id = String(p._id);

    try {
        res.json({ id: (await p.save()).fhir.id });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};