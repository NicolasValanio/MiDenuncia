const modelReport = require('../../models').report;
exports.deleteReport = async (req, res) => {
    try {
        const id  = req.params.id;
        
        const deleteReport = await modelReport.destroy({
            where: {
                 id
    }})
    
    
        res.status(200).json({
            message: 'REPORTE ELIMINADO CORRECTAMENTE',
            
        });
    } catch (error) {
        res.status(500).json({
            message: error,
            data: {}
        });
    }
};