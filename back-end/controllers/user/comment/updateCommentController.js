const modeloComment=require('/back-end/models').comment 

exports.updateComment = async (req,res)=>{

    try{
         
        const Comment = await modeloComment.findByPk(req.params.id)

        if (!Comment) {
            
            res.json({ mensaje: "El comentario no existe" })

            return
          }

        await modeloComment.update(req.body,{

            where : {id: req.params.id}

        })

        res.json({ mensaje: "comentario actualizado" })



        

     }catch(error){
 
         res.send(error)
     }
}