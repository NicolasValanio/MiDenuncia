const modelTypeRequest = require('../../models').types_request;
exports.infoTypesRequest = async (req, res, next) => {
     
    try{
       req.params.id ? await modelTypeRequest.findByPk(req.params.id).then((data)=>{
            res.json({datos:data},200)
        }
        ).catch((err)=>next(err)) : await modelTypeRequest.findAll().then((data)=>{
            res.json({datos:data},200)
        }).catch((err)=>next(err))

    }catch(error){      
        res.send(error)

    }
}
