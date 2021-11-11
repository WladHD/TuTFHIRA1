const $ = require("jquery");

module.exports = () => {
    $(".patient-search form").on("submit", (event) => {
        event.preventDefault();

        require("../../rest/getPatientsByName")($("#patient-search-input").val(), body => require("../../scenes/displayPatientSearchName")(body));
        
        return false;
    })
};