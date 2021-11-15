const $ = require("jquery");
const moment = require("moment");

function displayPatientNotes(notes) {
    const noteTable = $(".patient-card-selected-notes table tfoot");
    noteTable.empty();

    notes.forEach(element => {
        noteTable.append("<tr><td>" + moment(element.fhir.date, "YYYY-MM-DDTHH:mm:ssZ").format("DD.MM.YYYY HH:mm:ss") + "</td><td class='summary-holder'>" + element.fhir.summary + "</td><td><i class='far fa-edit' id='edit#" + element.fhir.id + "'></i><i class='far fa-trash-alt' id='delete#" + element.fhir.id + "'></i></td></tr>");
    });

    $(".patient-card-selected-notes table tfoot .far").click(processOption)
}

function processOption(event) {
    event.preventDefault();

    const args = event.target.id.split("#");

    switch (args[0]) {
        case "delete":
            if (confirm("Sind Sie sicher, dass die Notiz gelöscht werden soll?")) {
                require("../rest/deleteNote")(args[1], reply => {
                    require("../flow/loadNotes")();
                })
            }
            break;
        case "edit":
            const summary = $(event.target).parent().parent().find(".summary-holder");

            summary.toggleClass("in-process");

            if (summary.hasClass("in-process")) {
                const tmp = summary.text();

                summary.empty();
                summary.append("<textarea></textarea>");
                summary.find("textarea").text(tmp);
            } else {
                require("../rest/editNote")(args[1], summary.find("textarea").val(), reply => require("../flow/loadNotes")())
            }

            break;

    }

    return false;
}

module.exports = displayPatientNotes;