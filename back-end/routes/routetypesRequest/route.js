const express=require('express');
const router=express.Router()

const createTypeRequestController=require('../../controllers/typeRequest/createTypesRequestController');
const infoTypeRequestController=require('../../controllers/typeRequest/infoTypesRequestController');
const updateTypeRequestController=require('../../controllers/typeRequest/updateTypesRequestController');
const deleteTypeRequestController=require('../../controllers/typeRequest/deleteTypesRequestController');

router.post('/createTypeRequest',createTypeRequestController.createTypesRequest);
router.get('/infoTypeRequest',infoTypeRequestController.infoTypesRequest);
router.put('/updateTypeRequest',updateTypeRequestController.updateTypesRequest);
router.delete('/deleteTypeRequest',deleteTypeRequestController.deleteTypeRequest);

module.exports=router