const express = require('express')

const router = express.Router();

const infoCommentController = require('../../controllers/comment/infoCommentController')
const createCommentController = require('../../controllers/comment/createCommentController')
const deleteCommentController = require('../../controllers/comment/deleteCommentController')
const updateCommentController = require('../../controllers/comment/updateCommentController')

router.get('/mostrarComments', infoCommentController.infoComment)
router.post('/crearComments', createCommentController.createComment)
router.delete('/eliminarcomments/:id', deleteCommentController.deleteComment)
router.put('/actualizarcomments/:id', updateCommentController.updateComment)


module.exports = router