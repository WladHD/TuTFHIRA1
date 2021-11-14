const $ = require("jquery");

module.exports = {
    setColor: (select) => {
        select.css("background-color", select.find(":selected").css("background-color"));
    },

    calculateBarthelSum: (form) => {
        let sum = 0;

        form.find("select").each((i, val) => {
            sum += parseInt($(val).val().split(" - ")[0]);
        })

        form.find(".barthel-sum").val(sum);
    }
}