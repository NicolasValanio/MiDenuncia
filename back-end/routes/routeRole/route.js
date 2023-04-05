const express=require('express')
const router= express.Router();

const createRoleController=require('../../controllers/role/createRoleController');
const deleteRoleController=require('../../controllers/role/deleteRoleController');
const updateRoleController=require('../../controllers/role/updateRoleController');
const infoRoleController=require('../../controllers/role/infoRoleController');


router.post('/createRole',createRoleController.createRole)
router.delete('/deleteRole/:id',deleteRoleController.deleteRole)
router.put('/updateRole/:id',updateRoleController.updateRole)
router.get('/infoRole',infoRoleController.infoRole)


module.exports=router