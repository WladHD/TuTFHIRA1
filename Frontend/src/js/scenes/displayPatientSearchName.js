const $ = require("jquery");

module.exports = (fus) => {
    const patientSearchList = $(".patient-search ul");
    patientSearchList.empty();

    fus.forEach(patient => {
        if (patient.obj)
            patient = patient.obj;

        patientSearchList.append("<li><p><a href='#" + patient.patientId + "'>" + patient.combinedOfficialName + "</a></p></li>");
    });

    $(".patient-search ul li a").click((event) => {
        event.preventDefault();
        const patId = event.target.href.split("#")[1];

        $(".patient-card-selected tbody textarea").attr("name", patId);

        let patient;

        require("../rest/getPatientById")(patId, (reply) => {
            if (reply === undefined || reply === null)
                return alert("Patient nicht gefunden");

            require("../scenes/displayPatientCardById")(reply.fhir)
            require("../rest/getNotesByPatient")(patId, (reply) => require("../scenes/displayPatientNotes")(reply));
            require("../rest/getBarthelIndexByPatient")(patId, (reply) => require("./displayPatientBarthelIndex")(reply));
        });

    });
}