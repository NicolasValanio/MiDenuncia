
const express = require('express');
const controller = require('../../controllers/uploadRequestController');
const cloudinary = require("../../cloudinary/cloudinary");
// const requestTable = require("../../models/request");
// const photoTable = require("../../models/photo");
const router = express.Router();


router.post('/formRequest', controller.upload, async(req, res)=>{
  try{
    let imagen = req.file.path;
    let urlCloudinary = await cloudinary.uploader.upload(imagen);
    res.json({
        massage: req.body,
        url: urlCloudinary.url
    });
    // requestTable.create({
    //   location: "",
    //   neighborhood: "",
    //   subject: "",
    //   problem: ""
    // });
    // photoTable.create({
    //   url: urlCloudinary.url
    // });
  }
  catch(e){
    console.log(e);
  }
});


module.exports = router