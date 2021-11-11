const $ = require("jquery");
const moment = require("moment");

function displayPatientCard(fhir) {
    $(".patient-card-header-name").text(parseName(fhir));

    const date = parseDate(fhir);
    $(".patient-card-header-birthdate").text(date.format('DD.MM.YYYY'));
    $(".patient-card-header-age").text(moment().diff(date, 'years'));
}

function parseName(fhir) {
    let name;

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