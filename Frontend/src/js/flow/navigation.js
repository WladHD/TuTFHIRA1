const $ = require("jquery");

module.exports = {
    showNotes: () => {
        $(".patient-card-selected-barthel").addClass("hidden");
        $(".patient-card-selected-notes").removeClass("hidden");
        require("../rest/getNotesByPatient")(require("./currentPatient")(), reply => require("../scenes/displayPatientNotes")(reply))
    },

    showBarthelIndex: () => {
        $(".patient-card-selected-notes").addClass("hidden");
        $(".patient-card-selected-barthel").removeClass("hidden");
        require("../rest/getBarthelIndexByPatient")(require("./currentPatient")(), reply => require("../scenes/displayPatientBarthelIndex")(reply))
    },

    showPatientCard: () => {
        $(".patient-new").addClass("hidden");
        $(".patient-card").removeClass("hidden");
    },

    hidePatientCard: () => {
        $(".patient-card").addClass("hidden");
    },

    showPatientNew: (edit) => {
        const pn = $(".patient-new");
        $(".patient-card").addClass("hidden");
        $(pn.find("form")).trigger("reset");

        $(pn.find(".patient-new-head")).text(edit ? "bearbeiten" : "hinzufügen");

        if (edit === true) {
            
            pn.addClass("edit")
            require("../rest/getPatientById")(require("../flow/currentPatient")(), reply => {
                require("../scenes/displayPatientCardEdit")(reply.fhir);
                pn.removeClass("hidden");
            })

        }
        else {
            pn.removeClass("hidden")
            pn.removeClass("edit")
        }
    },

    hidePatientNew: () => {
        $(".patient-new").addClass("hidden");
    },
}