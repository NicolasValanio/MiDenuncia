const modelsRequest = require('../../models').request;

exports.createRequest = async(req,res,next)=>{
    try {
        const {location} = req.body;
        await modelsRequest.create({location}).then((data)=>{
            res.status(201).json({data})
        }).catch((err)=> next(err));
        
    } catch (error) {
        res.send(error)
    }
}