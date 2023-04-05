const modelRating = require('../../models').rating;
exports.deleteRating = async (req, res) => {
    try {
        const id  = req.params.id;
        
        const deleteRating = await modelRating.destroy({
            where: {
                 id
    }})
    
    
        res.status(200).json({
            message: 'CALIFICACION ELIMINADO CORRECTAMENTE',
            
        });
    } catch (error) {
        res.status(500).json({
            message: error,
            data: {}
        });
    }
};