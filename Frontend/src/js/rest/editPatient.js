module.exports = (fhir, onReply) => require("./template/post")('http://localhost:3030/patient/edit', fhir, onReply);