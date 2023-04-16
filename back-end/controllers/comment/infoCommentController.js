const modeloComment = require('../../models').comment



exports.infoComment = async (req, res) => { //ruta para mostrar los comentarios

    try {

        const comments = req.params.id //comprobar si se da una id en la url 
            ?
            await modeloComment.findByPk(req.params.id) :
            await modeloComment.findAll() //traemos todos los registros de la tabla comentarios


        res.json(comments)

    } catch (error) {

        res.send(error)
    }

}