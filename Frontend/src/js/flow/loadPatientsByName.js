const $ = require("jquery");

module.exports = () => require("../rest/getPatientsByName")($("#patient-search-input").val(), body => require("../scenes/displayPatientSearchName")(body));