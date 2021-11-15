module.exports = (gender, family, given, birthDate, street, city, country, postCode, tel) => {
    return {
        resourceType: "Patient",
        gender: gender,
        name: [{
            "use": "official", // usual | official | temp | nickname | anonymous | old | maiden
            "family": family, // Family name (often called 'Surname')
            "given": given, // Given names (not always 'first'). Includes middle names
        }],
        birthDate: birthDate,
        address: [{
            "use": "home", // home | work | temp | old | billing - purpose of this address
            "type": "both", // postal | physical | both
            "line": [street], // Street name, number, direction & P.O. Box etc.
            "city": city, // Name of city, town etc.
            "district": country, // District name (aka county)
            "postalCode": postCode, // Postal code for area
        }],
        telecom: [{
            "system": "phone", // C? phone | fax | email | pager | url | sms | other
            "value": tel, // The actual contact point details
            "use": "home", // home | work | temp | old | mobile - purpose of this contact point
        }]

    };
}