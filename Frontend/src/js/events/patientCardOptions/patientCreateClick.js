const $ = require("jquery");

module.exports = () => {
    $(".patient-search .fa-plus-square").on("click", (event) => {
        event.preventDefault();

        require("../../flow/navigation").showPatientNew();
        
        return false;
    })
};