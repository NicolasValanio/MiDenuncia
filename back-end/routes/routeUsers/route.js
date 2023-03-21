
const express=require('express')
const router= express.Router();
const createUserController=require('../../controllers/user/createUserController');
const infoUserController=require('../../controllers/user/infoUserController');
const validateEmailUserController= require('../../controllers/user/validateEmailUserController')

// Route role controller role
const createRoleController = require('../../controllers/role/createRoleController')
const deleteRoleController = require('../../controllers/role/deleteRoleController')
const queryRoleController = require('../../controllers/role/queryRoleController')
const queryRoleAllController = require('../../controllers/role/queryRoleAllController')
// Route role controller document
const createDocumentController = require('../../controllers/document/createDocumentController')
const queryDocumentAll = require('../../controllers/document/queryDocumentAllController')
const deleteDocumentController = require('../../controllers/document/deleteDocumentController')



// Route user
router.post('/createUser',createUserController.createUser)
router.get('/info',infoUserController.infoUser)
router.get('/validateEmail',validateEmailUserController.validateEmail)
// Route role
router.post('/createRole',createRoleController.createRole)
router.put('/deleteRole/:id',deleteRoleController.deleteRole)
router.get('/queryRole/:id',queryRoleController.queryRoleId)
router.get('/queryRoleAll',queryRoleAllController.queryRoleAll)
// Route document
router.post('/createDocument',createDocumentController.createDocument)
router.get('/queryDocumentAll',queryDocumentAll.queryDocumentAll)
router.delete('/deleteDocument/:number_document',deleteDocumentController.deleteDocument)




module.exports=router