module.exports = (id, onReply) => require("./template/post")('http://localhost:3030/clinicalimpression/delete', { id : id }, onReply);