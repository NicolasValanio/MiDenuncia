//variables para los controladores de los tipos de reporte
const express= require('express'); 
const router=express.Router(); 


const createTypesReportController=require('../../controllers/typeReport/createTypesReportController');
const infoTypesReportController=require('../../controllers/typeReport/infoTypesReportController');
const updateTypesReportController=require('../../controllers/typeReport/updateTypesReportController');
const deleteTypesReportController=require('../../controllers/typeReport/deleteTypesReportController');  

//Rutas para Tipo de Reporte
router.post('/createTypesReport',createTypesReportController.createTypesReport);
router.get('/infoTypesReport',infoTypesReportController.infoTypesReport); 
router.put('/updateTypesReport/:id',updateTypesReportController.updateTypesReport);
router.delete('/deleteTypesReport/:id',deleteTypesReportController.deleteTypesReport);   

module.exports=router