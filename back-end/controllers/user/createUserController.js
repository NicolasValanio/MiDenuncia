
const modeloUser= require('../../models').user;
exports.createUser = async(req,res,next)=>{
   // console.log(req.body)

    try {
        const {name,last_name,nickname,email,password,password2}=req.body;
        
        await modeloUser.create({
            nickname,name,last_name,email,password
        }).then((data)=>{
            
            res.status(201).json({datos: data})
        }).catch((err) => next(err));
        
    } catch (error) {
        res.send(error)
    }
}

