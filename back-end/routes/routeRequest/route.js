const express=require('express')//toca tener expres para importar router
const router= express.Router();//esto es la ruta para que el endPoint pueda verlo y de aqui en adelnate usamos esa ¿varle?
const createRequestController=require('../../controllers/request/createRequestController');//esto ese estamos importando de los cont
const deleteRequestController=require('../../controllers/request/deleteRequestController');
const updateRequestController=require('../../controllers/request/updateRequestController');
const {validateCreatedRequest}=require('../../handlers/validateCreatedRequest');//esto es para validar los datos que se envian al servidor

//Esta bien?

router.post('/createRequest',validateCreatedRequest,createRequestController.createRequest)
router.delete('/deleteRequest/:id',deleteRequestController.deleteRequest)
router.put('/updateRequest/:id',updateRequestController.updateRequest)

module.exports=router 