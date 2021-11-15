const $ = require("jquery");

module.exports = () => {
    $(".patient-card-options .fa-trash-alt").on("click", (event) => {
        event.preventDefault();

        if (confirm("Sind Sie sicher, dass der Patient gelöscht werden soll?") && confirm("Alle zugehörigen Daten werden entfernt! Fortfahren?")) {
            require("../../rest/deletePatient")(require("../../flow/currentPatient")(), reply => {
                require("../../flow/loadPatientsByName")();
                require("../../flow/navigation").hidePatientCard();
            })
        }

        return false;
    })
};