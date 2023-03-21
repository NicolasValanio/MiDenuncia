const ModeloRole= require('../../models').role 

exports.deleteRole= async (req,res,next)=>{
    try {
        const {id}=req.params
        const role= await ModeloRole.findByPk(id)
        if(!role){
            // 
            return res.status(400).json({error:'Role not found'})
        }
        await role.destroy()
        // 
        return res.status(200).json({message:'Role deleted successfully'})
    } catch (error) {
        next(error)
    }
}