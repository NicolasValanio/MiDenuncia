const ModelRole= require('../../models').role;
exports.createRole = async (req, res) => {
    try{
        await ModelRole.create(req.body).then((data)=>{
            res.status(201).json({datos: data})
        }).catch((err) => next(err));
    }
    catch(error){
        res.send(error)
    } 

   
};