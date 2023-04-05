const ModelRating= require('../../models').rating;
exports.infoRating = async (req, res) => {
    try{
        req.params.id ? await ModelRating.findByPk(req.params.id).then((data) => {
            res.json({ datos: data }, 200)
        }).catch((err) => next(err)) : await ModelRating.findAll().then((data) => {
            res.json({ datos: data }, 200)
        }).catch((err) => next(err))
    }
    catch(error){
        res.send(error)
    }
};
