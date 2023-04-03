const modelUser = require('../../models').user;
const modelRequest = require('../../models').request;
const modelTypeRequest = require('../../models').types_request;
const modelRating = require('../../models').rating

exports.infoRequestUser = async (req,res,next) => {

    try {
    let storeRequest= await modelRequest.findAll({include: [modelTypeRequest]})

    let storeUser= await modelRating.findAll({include: [modelUser]});

    res.status(200).send(JSON.stringify({storeRequest,storeUser}))
    } catch (error) {
        res.send(error)
    }

}
