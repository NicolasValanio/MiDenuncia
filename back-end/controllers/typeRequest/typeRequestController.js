const modelTypeRequest=require('../../models').types_request
//DAYANA

exports.typeRequest=async(req,res)=>{

    try{


        const types= await modelTypeRequest.findAll({ attributes: ['id', 'name']})
    

            res.status(200).json({types})


    }catch(error){

        res.send(error)

    }


}