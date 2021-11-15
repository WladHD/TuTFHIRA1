const DM_Patient = require('../../../DatabaseModels/DM_Patient');
const fuzzysort = require('fuzzysort')

module.exports = async (req, res) => {
    let db = (await DM_Patient.find({}, 'fhir.id fhir.name')).map(patient => {
        return {
            patientId: patient.fhir.id,
            combinedOfficialName: parseName(patient.fhir)
        }
    }
    )

    if (req.body.query === "")
        return res.json(db.sort((a, b) => a.combinedOfficialName.localeCompare(b.combinedOfficialName)));
        
    res.json(fuzzysort.go(
        req.body.query, db,
        {
            threshold: -Infinity,
            limit: Infinity,
            allowTypo: true,

            key: 'combinedOfficialName',
        }
    )
    );




}

function parseName(fhir) {
    let name;

    fhir.name.forEach(i => {
        if (name === undefined || i.use === "official")
            name = i.family + ", " + i.given.join(" ");
    });

    return name || "Kein Name gefunden";
}