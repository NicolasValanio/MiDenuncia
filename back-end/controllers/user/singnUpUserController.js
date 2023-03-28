const modeloUser= require('../../models').user;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { json } = require('sequelize');
exports.singUp = async(req,res,next)=>{
   // console.log(req.body)

exports.signUp = async (req, res, next) => {
  try {
    let {name, last_name, nickname, email, password} = req.body;

    // buscar el correo electrónico en la tabla de usuarios
    const user = await modeloUser.findOne({where: {email: email}});

    // si el correo electrónico existe, enviar una respuesta de error
    if (user) {
      return res.status(400).json({message: 'El correo electrónico ya está registrado'});
    }

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

