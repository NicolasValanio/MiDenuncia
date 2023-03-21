
const express=require('express')
const router= express.Router();
const createUserController=require('../../controllers/user/createUserController');
const infoUserController=require('../../controllers/user/infoUserController');
const validateEmailUserController= require('../../controllers/user/validateEmailUserController')





router.post('/createUser',createUserController.createUser)
router.get('/info',infoUserController.infoUser)
router.get('/signIn',validateEmailUserController.validateEmail)

module.exports=router