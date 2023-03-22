const modelTypeReport = require('../../models').type_report;
exports.infoTypesReport = async (req, res, next) => {

    try {
        req.params.id ? await modelTypeReport.findByPk(req.params.id).then((data) => {
            res.json({ datos: data }, 200)
        }).catch((err) => next(err)) : await modelTypeReport.findAll().then((data) => {
            res.json({ datos: data }, 200)
        }).catch((err) => next(err))
    }
    catch (error) {
    res.send(error)
    }
}