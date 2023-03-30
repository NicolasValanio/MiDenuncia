
const express=require('express')
const router= express.Router();
const authMiddleware=require('../../middleware/auth')
const signUpUserController=require('../../controllers/user/singnUpUserController');
const infoUserController=require('../../controllers/user/infoUserController');
const signInUserController= require('../../controllers/user/signInUserController');
const infoRequestUserController = require('../../controllers/user/infoRequestUserController');
const recoverPasswordUserLogController=require('../../controllers/user/recoverPasswordUserLogController');



router.post('/signUp',signUpUserController.signUp)
router.post('/signIn',signInUserController.signIn)

router.put('/recoverPassword/:id',recoverPasswordUserLogController.recoverPasswordUserLog)

router.get('/info',authMiddleware,infoUserController.infoUser)
router.get('/infoRequestUser',infoRequestUserController.infoRequestUser)


module.exports=router