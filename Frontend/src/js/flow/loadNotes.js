const $ = require("jquery");

module.exports = () => require("../rest/getNotesByPatient")($(".patient-card-selected tbody textarea").attr("name"), (reply) => require("../scenes/displayPatientNotes")(reply));