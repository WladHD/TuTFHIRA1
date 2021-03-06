const $ = require("jquery");

module.exports = () => {
    $(".patient-card-selected-barthel form").on("submit", (event) => {
        event.preventDefault();

        let items = [];

        $(event.target).find("label").each((i, val) => {
            const je = $(val);

            if (je.find("select").length)
                items.push({
                    item: [{
                        text: je.find("p").text(),
                        linkId: je.find("p").text(),
                        answer: [{ valueInteger: parseInt(je.find("select option:selected").text().split(" - ")[0]) }]
                    }]
                });
        })

        const json = require("../../rest/template/QuestionnaireResponseJSON")(require("../../flow/currentPatient")(), items);

        require("../../rest/createBarthelIndex")(json, reply => {
            require("../../flow/loadBarthelIndex")();
        })

        return false;
    })
}