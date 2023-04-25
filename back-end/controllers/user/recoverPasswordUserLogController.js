const modelUser = require("../../models").user;
const bcrypt = require("bcrypt");

exports.recoverPasswordUserLog = async (req, res) => {
  try {
    let { password, password1 } = req.body;
    const user = await modelUser.findByPk(req.params.id);
    if (!user) {
      return res.status(400).json({ message: "user not exist" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res
        .status(200)
        .json({ message: "contraseña antigua errornea" });
    }
    password1 = bcrypt.hashSync(password1, 10);
    await modelUser.update(
      { password: password1 },
      { where: { id: req.params.id } }
    );
    res.status(200).json({
      message: "La contraseña fue cambiada exitosamente!",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
