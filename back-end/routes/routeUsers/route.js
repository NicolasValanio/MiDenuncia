
const express=require('express')
const router= express.Router();
const authMiddleware=require('../../middleware/auth')
const signUpUserController=require('../../controllers/user/singnUpUserController');
const infoUserController=require('../../controllers/user/infoUserController');
const signInUserController= require('../../controllers/user/signInUserController');
const infoRequestUser = require('../../controllers/user/infoRequestUserController');



router.post('/signUp',signUpUserController.signUp)
router.post('/signIn',signInUserController.signIn)
router.get('/info',authMiddleware,infoUserController.infoUser)
router.get('/infoRequestUser',infoRequestUser.infoRequestUser)


module.exports=router