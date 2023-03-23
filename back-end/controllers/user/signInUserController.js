const modeloUser = require('../../models').user;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signIn = async (req, res, next) => {

    try {

        let { email, password1 } = req.body;



        await modeloUser.findOne({ where: { email } }).then(user => {




            if (!user) {
                res.status(400).json({ message: 'Usuario con este correo no encontrado' })
            } else {


                if (bcrypt.compareSync(password1, user.password1)) {



                    let token = jwt.sign({
                        user
                    }, 'secret', { expiresIn: '1h' });
                    res.json({ user, token })
                } else {
                    res.status(401).json({ message: 'contrase:na no es correcta' })
                }
            }

        }).catch((err) => next(err));


    } catch (error) {
        res.status(404).json({ mensaje: 'Error authentication' })

    }

}