const $ = require("jquery");
const nav = require("../../flow/navigation");

module.exports = () => {
    $(".patient-card-select li").on("click", (event) => {
        event.preventDefault();

        switch ($(event.target).text()) {
            case "Pflegenotizen":
                nav.showNotes();
                break;
            case "Barthel-Index":
                nav.showBarthelIndex();
                break;
        }


        return false;
    })
}