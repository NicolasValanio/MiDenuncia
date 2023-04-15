const modeloComment = require("../../models").comment;
const { validationResult } = require("express-validator");
const commentRegister = require("../../handlers/validateCreatedComents");

const createComment = async (req, res) => {
  try {
    const { date, description, status } = req.body;
    const comment = await modeloComment.create({ date, description, status });
    if (!comment) {
      return res.status(500).send("Error al crear el comentario");
    }
    res.status(200).json({ comment });
  } catch (error) {
    res.send(error);
  }
};

const getComments = async (req, res) => {
  try {
    const { limit = 4, offset = 0 } = req.query;
    if (isNaN(limit) || isNaN(offset)) {
      limit = 10;
      offset = 0;
    }
    const comments = await modeloComment.findAll({ limit, offset });
    if (!comments.length) {
      return res.status(404).send("No se encontraron comentarios");
    }
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createComment, getComments };
