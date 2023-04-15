const modeloComment = require("../../models").comment;

exports.infoComment = async (req, res) => {
  //ruta para mostrar los comentarios

  try {
    const { limit = 4, offset = 0 } = req.query;
    const comments = req.params.id
      ? await modeloComment.findByPk(req.params.id)
      : await modeloComment.findAll({
          limit: limit,
          offset: offset,
        }); //traemos todos los registros de la tabla comentarios

    res.json(comments);
  } catch (error) {
    res.send(error);
  }
};
