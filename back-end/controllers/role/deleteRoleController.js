const ModelRole= require('../../models').role;
exports.deleteRole = async (req, res) => {
    try {
        const id  = req.params.id;
        
        const deleteRole = await ModelRole.destroy({
            where: {
                 id
    }})
    
    
        res.status(200).json({
            message: ' ROL ELIMINADO CORRECTAMENTE',
            
        });
    } catch (error) {
        res.status(500).json({
            message: error,
            data: {}
        });
    }
}