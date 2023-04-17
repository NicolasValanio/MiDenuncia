const express=require('express')
const router= express.Router()
const typeRequestController=require('../../controllers/typeRequest/typeRequestController')



router.get('/typerequest',typeRequestController.typeRequest)




module.exports=router



