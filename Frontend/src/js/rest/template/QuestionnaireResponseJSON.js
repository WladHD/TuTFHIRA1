module.exports = (patientId, items) => {
    return {
        resourceType: "QuestionnaireResponse",
        status: "completed",
        subject: {
            reference: patientId,
            type: "Patient"
        },
        item: [{
            text: "Barthel-Index",
            linkId: "Barthel-Index",
            answer: items
        }],
        authored: "2020"
    };
}