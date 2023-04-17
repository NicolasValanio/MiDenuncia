// defina la variable
const like = require('../models/like');
// consultar el rol de usuario y si activo o inactivo
exports.getLike = async (req, res, next) => {
    try {
        
        const { id } = req.params;
        const like = await modelsLike.findOne({ where: { id } });
        res.status(200).json(like);
    } catch (error) {
        next(error);
    }
    }