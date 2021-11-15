const $ = require("jquery");

module.exports = () => {
    $(".patient-search form").on("submit", (event) => {
        event.preventDefault();

        require("../../flow/loadPatientsByName")();
        
        return false;
    })
};