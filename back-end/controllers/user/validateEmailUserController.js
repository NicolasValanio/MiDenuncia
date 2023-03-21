const modeloUser = require('../../models').user;

exports.validateEmail = async (req, res, next) => {

    try {

        let { email, password } = req.body;
       
        
        // const user =
         await modeloUser.findOne({ where: {email } }).then(user => {
           
            
            if(!user){
                res.status(400).json({ message: 'Usuario con este correo no encontrado'})
            }else{
               
                if(bcrypt.compareSync(password,user.password)){
                    
                  
                  
                    let token= jwt.sign({
                        user
                      }, 'secret', { expiresIn: '1h' });
                      res.json({user,token})
                }else{
                    res.status(401).json({ message: 'contrase:na no es correcta'})
                }
            }

         });



        // Search validate information email
        // (email === user.email && password === user.password) ? res.send(user) : res.status(404).json({mensaje:'user not exist'});


    } catch (error) {
        res.status(404).json({mensaje:'Error authentication'})

    }

}