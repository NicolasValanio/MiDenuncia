const modeloUser = require("../../models").user;
exports.infoUser = async (req, res, next) => {
  const { limit = 4, offset = 0 } = req.query;

  try {
    if (req.params.id) {
      const data = await modeloUser.findByPk(req.params.id);
      res.status(200).json(data);
    } else {
      const data = await modeloUser.findAll({ limit, offset });
      res.status(200).json(data);
    }
  } catch (error) {
    next(error);
  }
};
