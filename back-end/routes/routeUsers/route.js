
const express=require('express')
const router= express.Router();

const authMiddleware=require('../../middleware/auth')
const sigUpUserController=require('../../controllers/user/singnUpUserController');
const infoUserController=require('../../controllers/user/infoUserController');
const signInUserController= require('../../controllers/user/signInUserController');



  

router.post('/singUp',sigUpUserController.singUp)
router.get('/singIn',signInUserController.signIn)
router.get('/info',authMiddleware,infoUserController.infoUser)

module.exports=router