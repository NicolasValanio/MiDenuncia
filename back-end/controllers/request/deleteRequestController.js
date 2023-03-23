const modelsRequest = require('../../models').request;

exports.deleteRequest = async (req,res,next)=>{
    try {
        const deleteRequest = await modelsRequest.findOne({id: req.params.id})
        deleteRequest.destroy();
        res.send(deleteRequest);
    } catch (error) {
        res.send(error)
    }
}