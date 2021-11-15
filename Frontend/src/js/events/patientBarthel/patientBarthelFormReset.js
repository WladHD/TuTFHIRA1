const $ = require("jquery");
const barthelForm = require("../../flow/barthelForm");

module.exports = () => {
    $(".patient-card-selected-barthel form .fa-redo").on("click", (event) => {
        event.preventDefault();

        const form = $(".patient-card-selected-barthel form");

        barthelForm.resetForm(form);
        barthelForm.setColor($(form.find("select")));
        barthelForm.calculateBarthelSum(form);


        return false;
    })
}