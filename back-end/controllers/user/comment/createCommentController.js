const modeloComment=require('/back-end/models').comment 

exports.createComment = async (req,res)=>{

    try{
        const comment= await modeloComment.create(req.body)//creamos el comentario con create de sequelize

        res.json (comment)

     }catch(error){
 
         res.send(error)
     }
}