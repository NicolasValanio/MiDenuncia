const ModelRating = require('../../models').rating;
exports.createRating = async(req, res) => {
    try{
        await ModelRating.create(req.body).then((data)=>{
            res.status(201).json({datos: data})
        }).catch((err) => next(err));
    }
    catch(error){
        res.send(error)
    } 
}