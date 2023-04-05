const ModelRole= require('../../models').role;
exports.infoRole= async (req, res, next) => {

    try{
        req.params.id ? await ModelRole.findByPk(req.params.id).then((data) => {
            res.json({ datos: data }, 200)
        }).catch((err) => next(err)) : await ModelRole.findAll().then((data) => {
            res.json({ datos: data }, 200)
        }).catch((err) => next(err))
    }
    catch (error) {
    res.send(error)
    }

}
