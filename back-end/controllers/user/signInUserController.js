const modeloUser = require('../../models').user;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const app=require('../../app')

const session = require('express-session');
const Sequelize=require('sequelize');


const SequelizeStore = require('connect-session-sequelize')(session.Store)//este paquete genera automaticamente el modelo session en la bd
//aqui sincronizamos la bd con el modelo de sesion




const dbSequelize=new Sequelize('miDenuncia', 'root', null, {//instancia de sequelize

    dialect: 'mysql',
    storage: 'session.mysql' //este sera el archivo de almacenamiento

})

app.use(session({
    secret: 'midenunciasecreta',
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({//configuramos que sequelize sea el que almacene esa session
    db: dbSequelize

    })
}))

dbSequelize.sync()




exports.signIn = async (req, res, next) => {

    try {

        let { nickname, password } = req.body;



        await modeloUser.findOne({ where: { nickname } }).then(user => {




            if (!user) {
                res.status(400).json({ message: 'Usuario con este correo no encontrado' })
            } else {


                if (bcrypt.compareSync(password, user.password)) {



                    let token = jwt.sign({
                        user
                    }, 'secret', { expiresIn: '1h' });

                    res.json({ user, token })


                       
                   const sesionUser=  req.session.user={ data: nickname} 



                       // console.log('Inicio de sesión exitoso')

                        //res.redirect('http://localhost:5173/usuarioLog')
    
                        console.log('exito')
                 
                        console.log(req.session.user)

                    return sesionUser
                  


                } else {
                    res.status(401).json({ message: 'contraseña no es correcta' })
                }

            }

        }).catch((err) => {
            res.status(400).json({ message: 'error de autenticacion'})
        });


    } catch (error) {
        res.status(404).json({ mensaje: 'Error authentication' })

    }

}