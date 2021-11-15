const $ = require("jquery");
const moment = require("moment");
const barthelForm = require("../flow/barthelForm");

function displayPatientNotes(notes) {
    const noteTable = $(".patient-card-selected-barthel table tfoot");
    noteTable.empty();

    notes.forEach(element => {
        let bas = 0;

        element.fhir.item[0].answer.forEach(i => {
            bas += i.item[0].answer[0].valueInteger;
        })

        noteTable.append("<tr><td>" + moment(element.fhir.authored, "YYYY-MM-DDTHH:mm:ssZ").format("DD.MM.YYYY HH:mm:ss") + "</td><td class='summary-holder'><a href='show#" + element.fhir.id + "'>Barthel-Index " + bas + " von 100</a></td><td><i class='far fa-trash-alt' id='delete#" + element.fhir.id + "'></i></td></tr>");
    });

    $(".patient-card-selected-barthel table tfoot a").click(event => {
        event.preventDefault();

        require("../rest/getBarthelIndexById")($(event.target).attr("href").split("#")[1], reply => {
            const labels = $(".patient-card-selected-barthel label");
            const answers = reply.fhir.item[0].answer;

            let merge = [];

            labels.each((i, val) => {
                const name = $($(val).find("p")).text();

                for (let i = 0; i < answers.length; i++) {
                    if (answers[i].item[0].text === name) {
                        merge.push({
                            label: $(val),
                            answer: answers[i]
                        })
                        break;
                    }
                }

            })

            merge.forEach(elem => {
                $(elem.label.find("select option")).each((i, val) => {
                    const jv = $(val);
                    jv.removeAttr('selected');
                    jv.prop("selected", false);
                })

                $(elem.label.find("select option")).each((i, val) => {
                    const jval = $(val);
                    if (jval.text().split(" - ")[0] == elem.answer.item[0].answer[0].valueInteger) {
                        jval.attr("selected", "selected");
                        jval.prop("selected", true);
                        jval.parent().trigger("change");
                    }

                    barthelForm.setColor(jval.parent())
                })
            })

            barthelForm.calculateBarthelSum($(".patient-card-selected-barthel form"));
            $(".patient-card-selected-barthel form").trigger("change");

            $([document.documentElement, document.body]).animate({
                scrollTop: $(".patient-card-selected-barthel form").offset().top
            }, 0);


        })

        return false;
    })

    $(".patient-card-selected-barthel table tfoot .far").click(event => {
        event.preventDefault();
        const args = event.target.id.split("#");

        switch (args[0]) {
            case "delete":
                if (confirm("Sind Sie sicher, dass der Barthel-Index gelöscht werden soll?")) {
                    require("../rest/deleteBarthelIndex")(args[1], reply => {
                        require("../flow/loadBarthelIndex")();
                    })
                }
                break;
        }

        return false;
    })
}

module.exports = displayPatientNotes;