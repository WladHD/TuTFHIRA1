const $ = require("jquery");

module.exports = () => require("../rest/getBarthelIndexByPatient")(require("./currentPatient")(), (reply) => require("../scenes/displayPatientBarthelIndex")(reply));