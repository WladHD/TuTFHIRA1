const $ = require("jquery");
const moment = require("moment");
const barthelForm = require("../flow/barthelForm");
const nav = require("../flow/navigation");

function displayPatientCard(fhir) {
    if (fhir === undefined)
        return alert("Patient nicht gefunden")

    $(".patient-card-selected tbody textarea").attr("name", fhir.id);
    $(".patient-card-header-name").text(parseName(fhir));

    const date = parseDate(fhir);
    $(".patient-card-header-birthdate").text(date.format('DD.MM.YYYY'));
    $(".patient-card-header-age").text(moment().diff(date, 'years'));

    $(".patient-card-header-tel").text(parseTelephone(fhir));
    $(".patient-card-header-address").text(parseAddress(fhir));
    $(".patient-card-header-gender").text(parseGender(fhir));

    nav.showPatientCard();
    nav.showNotes();

    const form = $(".patient-card-selected-barthel form");

    barthelForm.resetForm(form);
    barthelForm.setColor($(form.find("select")));
    barthelForm.calculateBarthelSum(form);
}

function parseGender(fhir) {
    let gender;

    if (fhir.gender !== undefined)
        gender = (fhir.gender === "male" ? "Herr" : (fhir.gender === "female" ? "Frau" : "(Andere)"));

    return gender || "(Geschlecht unbekannt)";
}

function parseAddress(fhir) {
    let addr;

    if (fhir.address !== undefined)
        fhir.address.forEach(i => {
            if (addr === undefined || i.use === "home")
                addr = i.line.join(" ") + ", " + i.postalCode + " " + i.city + " - " + i.district;
        });

    return addr || "Keine Addresse gefunden";
}

function parseTelephone(fhir) {
    let tel;

    if (fhir.telecom !== undefined)
        fhir.telecom.forEach(i => {
            if (tel === undefined || i.use === "home" && i.system === "phone")
                tel = i.value;
        });

    return tel || "Keine Telefonnummer gefunden";
}

function parseName(fhir) {
    let name;

    if (fhir.name !== undefined)
        fhir.name.forEach(i => {
            if (name === undefined || i.use === "official")
                name = i.family + ", " + i.given.join(" ");
        });

    return name || "Kein Name gefunden";
}

function parseDate(fhir) {
    return moment(Date.parse(fhir.birthDate));
}

module.exports = displayPatientCard;