const $ = require("jquery");
const barthelFormActions = require("../../flow/barthelForm");

module.exports = () => {
    $(".patient-card-selected-barthel form select").on("change", (event) => {
        event.preventDefault();

        const jtarget = $(event.target);

        barthelFormActions.setColor(jtarget);
        barthelFormActions.calculateBarthelSum(jtarget.parent().parent())
        
        return false;
    })
}