const $ = require("jquery");

module.exports = () => {
    $(".patient-card-options .fa-edit").on("click", (event) => {
        event.preventDefault();

        require("../../flow/navigation").showPatientNew(true);
        
        return false;
    })
};