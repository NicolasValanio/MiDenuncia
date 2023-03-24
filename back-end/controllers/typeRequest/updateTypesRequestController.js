const modulTypesRequest = require('../../models').types_request;
exports.updateTypesRequest = async (req, res) => {
    try {
        const { id } = req.body.params;
        const updateTypesRequest = await modulTypesRequest.updateTypesRequest(id);
        res.status(200).json({
            message: 'ACTUALIZADO',
            data: updateTypesRequest
        });
    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
};