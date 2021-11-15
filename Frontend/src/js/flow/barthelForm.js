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
    },

    resetForm: (form) => {
        if (form === undefined)
            form = $(".patient-card-selected-barthel form")
            
        $(form.find("select")).each((i, val) => {
            const options = $($(val).find("option"))

            for (let i = 0; i < options.length; i++)
                $(options[i]).removeAttr('selected');

            for (let i = 0; i < options.length; i++)
                if (i === 0) {
                    const opt = $(options[i]);
                    opt.attr('selected', 'selected');
                    opt.trigger('change')
                }


        })
    }
}