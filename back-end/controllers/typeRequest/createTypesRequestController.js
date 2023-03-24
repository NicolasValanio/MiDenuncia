const modelTypesRequest = require('../../models').types_request;
exports.createTypesRequest = async(req,res,next)=>{
    try{
        await modelTypesRequest.create(req.body).then((data)=>{
            res.status(201).json({datos: data})
        }).catch((err) => next(err));
    }
    catch(error){
        res.send(error)
    }
}