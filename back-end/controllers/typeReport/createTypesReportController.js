const modelTypesReport = require('../../models').types_report;
exports.createTypesReport = async(req,res,next)=>{
    try{
        await modelTypesReport.create(req.body).then((data)=>{
            res.status(201).json({datos: data})
        }).catch((err) => next(err));
    }
    catch(error){
        res.send(error)
    } 

   
} 
