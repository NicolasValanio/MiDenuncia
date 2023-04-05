const ModelReport = require('../../models').report;
exports.infoReport = async (req, res, next) => {
    try{
        req.params.id ? await ModelReport.findByPk(req.params.id).then((data) => {
            res.json({ datos: data }, 200)
        }).catch((err) => next(err)) : await ModelReport.findAll().then((data) => {
            res.json({ datos: data }, 200)
        }).catch((err) => next(err))
    }
    catch(error){
        res.send(error)
}};

