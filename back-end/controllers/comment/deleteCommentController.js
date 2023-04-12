const modeloComment = require('../../models').comment

//este delete lo usa el superadmin nomas

exports.deleteComment = async (req, res) => {

    try {


        const Comment = await modeloComment.findByPk(req.params.id)

        if (!Comment) {

            res.json({
                mensaje: "El comentario no existe"
            })

            return
        }

        await modeloComment.destroy({

            where: {
                id: req.params.id
            }

        })

        res.json({
            mensaje: "comentario eliminado"
        })


    } catch (error) {

        res.send(error)
    }
}