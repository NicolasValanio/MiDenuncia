
const jwt=require('jsonwebtoken');
const modeloUser=require('../models').user



module.exports=(req,res,next)=>{

    if(!req.headers.authorization){
        res.status(401).json({message: 'Authorization required'})
    }else{
      //  console.log(req.headers)
      let token = req.headers.authorization.split(' ')[1];
      jwt.verify(token,'secret',(err,decoded)=>{
        if(err){
            res.status(500).json({message:'Ha ocurrido un problema', err})
        }else{

            modeloUser.findById(decoded.user.id,{include:'roles'}).then((user) => {
                
            }).catch((err) => {
                
            });
            // req.user=decoded.user;
            next()
        }
      })

        
    }
    

}