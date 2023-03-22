const modelTypesReport = require('../../models').types_report;
exports.deleteTypesReport = async (req, res) => {
    try {
        const id  = req.params.id;
        
        const deleteTypesReport = await modelTypesReport.destroy({
            where: {
                 id:id
    }})
    
    
        res.status(200).json({
            message: 'ELIMINADO CORRECTAMENTE',
            
        });
    } catch (error) {
        res.status(500).json({
            message: error,
            data: {}
        });
    }
};