
const modeloUser= require('../../models').user;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { json } = require('sequelize');
exports.signUp = async(req,res,next)=>{
   // console.log(req.body)

    try {
        let {name,last_name,nickname,email,password}=req.body;

        password = bcrypt.hashSync(password,10);
       

        let user=await modeloUser.findOne({ where: {email } });
        
             if(user){
                 res.status(400).json({message:'Usuario ya existe'})
             }else{

              await  modeloUser.create({
                    nickname,name,last_name,email,password,role_id:1
                }).then((data)=>{
                   let token= jwt.sign({
                        data
                      }, process.env.JWT_SECRET, { expiresIn: '1h' });
                      data.token=token;
                      data.save()
                    
                    res.status(201).json({data,token})
                }).catch((err) => {
                    res.status(400).json({message:err.message})
                });

            }

           
        
        
    } catch (error) {
        res.send(error)
    }
}

