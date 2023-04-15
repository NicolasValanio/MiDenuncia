
const express=require('express')
const router= express.Router();
const createUserController=require('../../controllers/user/createUserController');
const infoUserController=require('../../controllers/user/infoUserController');





router.post('/createUser',createUserController.createUser)
router.get('/info',infoUserController.infoUser)

module.exports=router