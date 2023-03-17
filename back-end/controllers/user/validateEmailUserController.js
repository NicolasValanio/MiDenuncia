const modeloUser = require('../../models').user;

exports.validateEmail = async (req, res, next) => {

    try {

        const { email, password } = req.body;
        const user = await modeloUser.findOne({ where: { email: email } });
        // Search validate information email
        (email === user.email && password === user.password) ? res.send(user) : res.status(404).json({mensaje:'user not exist'});


    } catch (error) {
        res.status(404).json({mensaje:'Error authentication'})

    }

}