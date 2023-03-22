
const modeloUser= require('../../models').user;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.singUp = async(req,res,next)=>{
   // console.log(req.body)

    try {
        let {name,last_name,nickname,email,password1,password2}=req.body;

        password1 = bcrypt.hashSync(password1,10);
       // res.send(password1)
        
        await modeloUser.create({
            nickname,name,last_name,email,password1
        }).then((data)=>{
           let token= jwt.sign({
                data
              }, 'secret', { expiresIn: '1h' });
            
            res.status(201).json({data,token})
        }).catch((err) => next(err));
        
    } catch (error) {
        res.send(error)
    }
}

