
const modeloUser= require('../../models').user;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { json } = require('sequelize');
exports.singUp = async(req,res,next)=>{
   // console.log(req.body)

    try {
        let {name,last_name,nickname,email,password}=req.body;

        password = bcrypt.hashSync(password,10);
       

        let user=await modeloUser.findOne({ where: {email } });
        
            // if(!user){
            //     res.status(100).json({message:'Usuario ya existe'})
            // }else{

                modeloUser.create({
                    nickname,name,last_name,email,password,
                }).then((data)=>{
                   let token= jwt.sign({
                        data
                      }, 'secret', { expiresIn: '1h' });
                    
                    res.status(201).json({data,token})
                }).catch((err) => next(err));

           // }
              
        
        
    } catch (error) {
        res.send(error)
    }
}

