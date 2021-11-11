const $ = require("jquery");

module.exports = (fus) => {
    const patientSearchList = $(".patient-search ul");
    patientSearchList.empty();

    fus.forEach(patient => {
        patientSearchList.append("<li><p><a href='#" + patient.obj.patientId + "'>" + patient.obj.combinedOfficialName + "</a></p></li>");
    });

    $(".patient-search ul li a").click((event) => {
        event.preventDefault();

        require("../rest/getPatientById")(event.target.href.split("#")[1], (body) => require("../scenes/displayPatientCardById")(body.fhir));
    });
}