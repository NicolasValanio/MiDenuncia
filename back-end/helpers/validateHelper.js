const { validationResult } = require("express-validator");

const validateResult = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  } catch {
    res.status(403);
    res.send({ errors: err.array });
    return res.status(500).json({ msg: "Error en el servidor" });
  }
};

module.exports = { validateResult };
