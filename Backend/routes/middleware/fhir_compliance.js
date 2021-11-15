const Fhir = require('fhir').Fhir;

module.exports = (resource) => {
    return (req, res, next) => {
        const compliance = new Fhir().validate(req.body);

        compliance.messages.some(msg => {
            if (msg.message === 'Unexpected property') {
                compliance.valid = false;
                return;
            }
        });

        if (!compliance.valid)
            return res.status(500).json({ err: compliance });

        if (resource !== undefined && req.body.resourceType !== resource)
            return res.status(500).json({ err: `FHIR Resource has to be a ${resource}.`});

        next();
    }
}