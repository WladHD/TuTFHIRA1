module.exports = () => {
    require("./patientSearch/patientSearchFormSubmit")();
    require("./patientNote/patientNoteAdded")();
    require("./patientBarthel/patientBarthelFormSubmit")();
    require("./patientBarthel/patientBarthelFormSelectChange")();
    require("./patientBarthel/patientBarthelFormReset")();
    require("./patientNavigation/patientNaviagtion")();
    require("./patientCard/patientFormSubmit")();
    require("./patientCardOptions/patientCreateClick")();
    require("./patientCardOptions/patientDeleteClick")();
    require("./patientCardOptions/patientEditClick")();
}