const $ = require("jquery");

module.exports = () => {
    $(".patient-card-selected tbody td .fa-save").click((event) => {
        event.preventDefault();

        const ta = $(".patient-card-selected tbody textarea");
        const tav = ta.val().trim();

        if(tav.length !== 0) {
            require("../../rest/createNote")(require("../../rest/template/ClinicalImpressionJSON")(ta.attr("name"), tav), (reply) => require("../../flow/loadNotes")());
            ta.val("");
        }
        
        return false;
    })
};