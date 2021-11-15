const $ = require("jquery");
const moment = require("moment");

module.exports = (fhir) => {
    const gender = $("#patient-gender");
    const options = $(gender.find("option"))

    const gender_val = parseGender(fhir);
    const name_val = parseName(fhir);
    const address_val = parseAddress(fhir);
    const tel_val = parseTelephone(fhir);

    options.each((i, val) => {
        $(val).removeAttr("selected");
    })

    options.each((i, val) => {
        if (i === gender_val)
            $(val).attr("selected", "selected");
    })
    gender.trigger("change");


    $("#patient-family").val(name_val.family);
    $("#patient-given").val(name_val.given.join("; "));
    $("#patient-date").val(moment(fhir.birthDate).format("YYYY-MM-DD"));

    if (tel_val !== undefined)
        $("#patient-tel").val(tel_val.value)

    if (address_val !== undefined) {
        $("#patient-street").val(address_val.line);
        $("#patient-pc").val(address_val.postalCode);
        $("#patient-city").val(address_val.city);
        $("#patient-country").val(address_val.district);
    }

}

function parseGender(fhir) {
    let gender;

    if (fhir.gender !== undefined)
        gender = (fhir.gender === "male" ? 0 : (fhir.gender === "female" ? 1 : 2));

    return gender;
}

function parseAddress(fhir) {
    let addr;

    if (fhir.address !== undefined)
        fhir.address.forEach(i => {
            if (addr === undefined || i.use === "home")
                addr = i;
        });

    return addr;
}

function parseTelephone(fhir) {
    let tel;

    if (fhir.telecom !== undefined)
        fhir.telecom.forEach(i => {
            if (tel === undefined || i.use === "home" && i.system === "phone")
                tel = i;
        });

    return tel;
}

function parseName(fhir) {
    let name;

    if (fhir.name !== undefined)
        fhir.name.forEach(i => {
            if (name === undefined || i.use === "official")
                name = i;
        });

    return name;
}

function parseDate(fhir) {
    return moment(Date.parse(fhir.birthDate));
}