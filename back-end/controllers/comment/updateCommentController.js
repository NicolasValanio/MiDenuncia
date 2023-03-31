const modeloComment = require('../../models').comment

//NO TOCAR, NO ES SEGURO SI SE HARA UPDATE O NO

exports.updateComment = async (req, res) => {

    try {


        const comment = await modeloComment.findByPk(req.params.id)
        const {date,description,status}=req.body

        if (!comment) {

            res.json({
                mensaje: "El comentario no existe"
            })

            return
        }

        await modeloComment.update(req.body, {

            where: {
                id: req.params.id
            }

        })

        res.json({
            mensaje: "comentario actualizado"
        })





    } catch (error) {

        res.send(error)
    }
}