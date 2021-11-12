module.exports = (patientId, notiz) => {
    return {
        resourceType: "ClinicalImpression",
        status: "completed",
        subject: {
            reference: patientId,
            type: "Patient"
        },
        date: "2020",
        summary: notiz
    };
}