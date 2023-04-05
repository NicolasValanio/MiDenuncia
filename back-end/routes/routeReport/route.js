const express=require('express')
const router=express.Router()

const infoReportController=require('../../controllers/report/infoReportController')
const createReportController=require('../../controllers/report/createReportController')
const updateReportController=require('../../controllers/report/updateReportController')
const deleteReportController=require('../../controllers/report/deleteReportController')


router.get('/infoReport',infoReportController.infoReport)
router.post('/createReport',createReportController.createReport)
router.put('/updateReport/:id',updateReportController.updateReport)
router.delete('/deleteReport/:id',deleteReportController.deleteReport)

module.exports=router