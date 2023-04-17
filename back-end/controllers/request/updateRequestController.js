const modelsRequest = require('../../models').request;

exports.updateRequest = async (req,res,next) => {
    try {
        const {location} = req.body;
        const updateRequest = await modelsRequest.findByPk(req.params.id);
        updateRequest.update({location})
        res.send('Bien');
    } catch (error) {
        res.send(error)
    }
}