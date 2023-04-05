const express=require('express')
const router= express.Router();



const email= require('../../controllers/email/emailController')


router.get('/send-mail',email.sendEmail)


module.exports=router;