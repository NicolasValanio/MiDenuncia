const express=require('express')
const router= express.Router();



const email= require('../../controllers/email/email')



router.post('/send-mail',email.sendEmail)


module.exports=router;