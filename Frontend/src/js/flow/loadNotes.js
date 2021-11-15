const $ = require("jquery");

module.exports = () => require("../rest/getNotesByPatient")(require("./currentPatient")(), (reply) => require("../scenes/displayPatientNotes")(reply));