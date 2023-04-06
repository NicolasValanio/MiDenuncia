const modelUser = require('../../models').user;
const modelRequest = require('../../models').request;
const modelTypesReport = require('../../models').types_report;
const modelReport=require('../../models').report;
const modelComment=require('../../models').comment;
const modelLikes=require('../../models').likes;
//const modelRating = require('../../models').rating

exports.infoRequestUser = async (req,res,next) => {

    try {
    const news= await modelReport.findAll({include: [modelLikes,modelTypesReport,modelRequest,modelUser,modelComment]})
    

    // let storeUser= await modelRating.findAll({include: [modelUser]});
        res.status(200).json({news})
    //res.status(200).send(JSON.stringify({storeRequest,storeUser}))
    } catch (error) {
        res.send(error)
    }

}
