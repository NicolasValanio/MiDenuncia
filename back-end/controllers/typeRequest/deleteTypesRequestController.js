const modelTypeRequest = require('../../models').types_request;
exports.deleteTypeRequest = async (req, res) => {
    try {
        const { id } = req.body.params;
        const deleteTypeRequest = await modelTypeRequest.deleteTypeRequest(id);
        res.status(200).json({
            message: 'ELIMINADO',
            data: deleteTypeRequest
        });
    } catch (error) {
        res.status(500).json({
            message:error,});
    }
};