const express=require('express')

const router= express.Router();

const infoCommentController=require('/back-end/controllers/user/comment/infoCommentController')
const createCommentController=require('/back-end/controllers/user/comment/createCommentController')
const deleteCommentController=require('/back-end/controllers/user/comment/deleteCommentController')
const updateCommentController=require('/back-end/controllers/user/comment/updateCommentController')

router.get('/mostrarComments',infoCommentController.infoComment)
router.post('/crearcomments',createCommentController.createComment)
router.delete('/eliminarcomments/:id',deleteCommentController.deleteComment)
router.put('actualizarcomments/:id',updateCommentController.updateComment)


module.exports=router