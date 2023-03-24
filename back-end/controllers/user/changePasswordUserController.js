const modelUser = require('../../models').user

exports.changePasswordUser =async (req,res)=>{

    try{

        const user= await modelUser.findByPk(req.params.id)
    

        if (!user) {

            res.json({
                mensaje: "El usuario no existe"
            })

            return
        }

        await modelUser.update(req.body,{

            where:{

            
                id:req.params.id

            }
        })

        res.json({
            mensaje: "contraseña cambiada"
        })





    }

    catch (error){

        res.send(error)

    }



}