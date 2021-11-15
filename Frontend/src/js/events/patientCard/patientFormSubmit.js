const $ = require("jquery");
const moment = require("moment");

module.exports = () => {
    $('.patient-new form input[type="date"]').attr('max', moment().format("YYYY-MM-DD"));
    $(".patient-new form").on("submit", (event) => {
        event.preventDefault();

        let answers = {
            gender: undefined,
            family: undefined,
            given: undefined,
            date: undefined,
            tel: undefined,
            street: undefined,
            pc: undefined,
            city: undefined,
            country: undefined
        };

        $(event.target).find("label").each((i, val) => {
            const je = $(val);
            const args = je.text().trim();
            const a = $(args.startsWith("Geschlecht") ? je.find("select") : je.find("input")).val().trim();

            if (args.startsWith("Geschlecht")) {
                answers.gender = (a === "Männlich" ? "male" : (a === "Weiblich" ? "female" : "other"));
                return;
            }

            switch (args) {
                case "Nachname":
                    answers.family = a;
                    break;
                case "Vorname(n)":
                    answers.given = a;
                    break;
                case "Geburtsdatum":
                    answers.date = a;
                    break;
                case "Telefonnummer":
                    answers.tel = a;
                    break;
                case "Straße, Hausnummer":
                    answers.street = a;
                    break;
                case "Postleitzahl":
                    answers.pc = a;
                    break;
                case "Stadt":
                    answers.city = a;
                    break;
                case "Land":
                    answers.country = a;
                    break;
            }
        })



        let abort = false;

        $.each(answers, el => {
            if (el === undefined || !answers.hasOwnProperty(el) || answers[el.toString()] === undefined) {
                abort = true;
            }

        })


        if (abort) {
            alert("Patientenakte fehlerhaft.")
            return false;
        }


        require("../../flow/navigation").hidePatientNew();

        const edit = $(".patient-new").hasClass("edit");
        const rest = edit ? require("../../rest/editPatient") : require("../../rest/createPatient");
        let json = require("../../rest/template/PatientJSON")(answers.gender, answers.family, answers.given.split("; "), moment(answers.date).format('YYYY-MM-DD'), answers.street, answers.city, answers.country, answers.pc, answers.tel);

        if (edit)
            json["id"] = require("../../flow/currentPatient")();

        rest(json, reply => {
            require("../../rest/getPatientById")(reply.id, reply => {
                require("../../flow/loadPatientsByName")();
                
                if (edit)
                    require("../../rest/getPatientById")(require("../../flow/currentPatient")(), reply => {
                        require("../../scenes/displayPatientCardById")(reply.fhir);
                    })
                else
                    require("../../scenes/displayPatientCardById")(reply.fhir);
            })
        })

        return false;
    })
}