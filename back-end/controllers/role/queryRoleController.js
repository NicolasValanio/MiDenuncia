const ModeloRole= require('../../models').role

exports.queryRoleId= async (req,res,next)=>{
    try {
        const {id}=req.params
        const role= await ModeloRole.findByPk(id)
        if(!role){
            // 
            return res.status(400).json({error:'Role not found'})
        }
        // 
        return res.status(200).json({datos:role})
    } catch (error) {
        next(error)
    }
}