const DM_Patient = require('../../../DatabaseModels/DM_Patient');

module.exports = async (req, res) => {
    res.json(await DM_Patient.findOne({"fhir.id" : req.body.id}));
};