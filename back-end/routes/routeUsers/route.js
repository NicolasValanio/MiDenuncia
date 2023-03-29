
const express=require('express')
const router= express.Router();
const createUserController=require('../../controllers/user/createUserController');
const infoUserController=require('../../controllers/user/infoUserController');



router.post('/signUp',signUpUserController.signUp)
router.post('/signIn',signInUserController.signIn)
router.get('/info',authMiddleware,infoUserController.infoUser)
router.get('/infoRequestUser',infoRequestUser.infoRequestUser)




module.exports=router