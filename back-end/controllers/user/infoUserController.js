const modeloUser= require('../../models').user;
exports.infoUser=async (req,res,next)=>{
   
   
    try {

        req.params.id ?  await  modeloUser.findByPk(req.params.id).then((data)=>{
            res.json({datos:data},200)
        }).catch((err) => next(err)) : await  modeloUser.findAll().then((data)=>{
            res.json({datos:data},200)
        }).catch((err) => next(err))
      
     
    } catch (error) {
        res.send(error)
        
    }
}