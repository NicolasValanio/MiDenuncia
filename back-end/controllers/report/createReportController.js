const modelReport= require('../../models').report;
exports.createReport = async(req,res,next)=>{
    try{
        await modelReport.create(req.body).then((data)=>{
            res.status(201).json({datos: data})
        }).catch((err) => next(err));
    }
    catch(error){
        res.send(error)
    } 
}


