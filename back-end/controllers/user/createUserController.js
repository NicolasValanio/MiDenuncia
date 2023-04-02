
const modeloUser= require('../../models').user;
exports.createUser = async(req,res,next)=>{

    try {
        await modeloUser.create(req.body).then((data)=>{
            
            res.status(201).json({datos: data})
        }).catch((err) => next(err));
        
    } catch (error) {
        res.send(error)
    }
}

