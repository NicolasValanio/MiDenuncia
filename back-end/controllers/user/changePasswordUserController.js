const modelUser = require('../../models').user
const bcrypt = require('bcrypt')

exports.changePasswordUser = async (req, res) => {

    try {
        let { password, passwordNueva, email } = req.body
        const user = await modelUser.findOne({ where: { email } });
        /// res.status(200).json(user);
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {//es contrase;a antigua
                passwordNueva = bcrypt.hashSync(passwordNueva, 10);
                await user.update({ password: passwordNueva })
                    .then(user => res.status(200).json({ message: 'cambio de contraseña exitoso!', user }))
                    .catch(err => res.json({ message: err.message }))
            } else {
                res.status(400).json({ message: "no se pudo" })
            }
        } else {
            return res.status(400).json({ message: "El usuario no existe" })
        }
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}