
const app = require('./app')
const bcrypt = require('bcrypt')

const User = require('./models').user
const SessionModel = require('./modeloMongo/sessionMongodb')

////aqui hacemos las importaciones y que todo quede dentro de ella
const express = require('express');



const cors = require('cors')
const dotenv = require('dotenv');




dotenv.config()
const mongoose = require('mongoose'); // --> Me genera error
const session = require('express-session');
const MongoStore = require('connect-mongo');



const cookieParser = require('cookie-parser')
const morgan = require('morgan')

//FIN
////////////////////////////////////////////////////////////////

///aqui se LLAMAN A A LAS RUTAS las rutas generales y que todo quede dentro de ella
const routes = require('./routes/routeUsers/route')
const routesComment = require('./routes/routeComments/route')
const routeRequest = require('./routes/routeRequest/route')
const routeEmail = require('./routes/routeEmail/nodemail')
const routeAuthGoogle = require('./routes/routeGoogle/route')
const handleError = require('./handlers/handlerError')


//FIN
////////////////////////////////////////////////////////////////
mongoose.connect(process.env.URI_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true
});


app.use(session({
  secret: 'mysecret', // secreto para firmar las cookies de sesión
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.URI_MONGO,
    crypto: {
      secret: 'secret'
    },
    collection: 'sessions',
    // expires: 60 * 60 * 24 * 7, // 7 days
    expires: 120, // 2 minutes
    model: SessionModel,

    // ttl: 24 * 60 * 60, // 1 día de vida útil })
  })
}));


//////////////////////////////////


/// codigo especial para procesar solicitudes HTTP y expres json lo convierta en json

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(cors()); //proteccion de cabecera
app.use(morgan('tiny'));//monitoreo de solicitudes
////////////////////////////////////////////////////////////////


app.use(session({
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },

  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: 'mongodb+srv://midenuncia:MIDENUNCIA2023@api-session.gu6bn9e.mongodb.net/api-sessions',
    collection: 'mysessions',

  }),


  

}));

///aqui se configura la ENTRADA  A LAS RUTAS trabajando  solo rutas
app.use(cookieParser())
app.use('/', routes)
app.use('/', routeRequest)
app.use('/', routesComment)
app.use('/', routeEmail)
app.use('/', routeAuthGoogle)




//FIN
////////////////////////////////////////////////////////////////

// app.get('/sesion', (req, res) => {
//   req.session.username = 'johndoe';
//   // res.send('Hello ' + JSON.stringify(req.session));
//   // req.session.username = 'john.doe';

//   // Save session to database
//   const session = new Session({
//     expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//     cookie: { originalMaxAge: 604800000, httpOnly: true, path: '/' },
//     sessionId: 'some_session_id',
//     sessionData: { some_key: 'some_value' }
//   });

//   session.save()
//     .then(() => {
//       console.log('La sesión se ha guardado correctamente');
//     })
//     .catch((err) => {
//       console.error('Error al guardar la sesión:', err);
//     });
// });

// app.get('/prueba', (req, res) => {
//  // req.session;
//   res.send('Hello ' + JSON.stringify(req.session));
//  // res.send('Session created successfully!');
// });




//INICIO
////////////////////////////////////////////////////////////////




//otra ruta// Cambio de contraseña

app.get('/verificacionToken', async (req, res) => {
  const { v4: uuidv4 } = require('uuid');

  //const uniqueId = uuidv4();
  const { token, email } = req.query;

  await User.findOne({ where: { resetPasswordToken: token } })
    .then(user => {
      const user1 = new SessionModel
      user1.sessionID = req.sessionID
      user1.session = user.email
      identificadorUUI = uuidv4()
      user1.save()
      req.session.email = user.email


      const url = `http://localhost:5173/contrasenaNueva?token=${user.resetPasswordToken}&email=${user.email}}`;
      res.redirect(url)
    }).catch(err => {
      res.send('token no funciona')
    });



})

////////////////////////////////////////////////////////////////
//INICIO
app.put('/newPassword', async (req, res) => {

  let { password, password2 } = req.body;




  //console.log(email);
  const seesionid = Object.keys(req.sessionStore.sessions)[0]
  //console.log(seesionid)

  const sessioUser = await SessionModel.findOne({ sessionID: seesionid })
    .then(user => {



      User.findOne({ where: { email: user.session } })
        .then(user => {
          if (user) {

            password2 = bcrypt.hashSync(password2, 10);
            User.update({ password: password2 },
              { where: { email: user.email } })
              .then(user => res.status(200).json({ message: 'cambio de contraseña exitoso!' }))
              .catch(err => res.json({ message: err.message }))
          } else {
            res.status(400).json({ message: "no se pudo" })
          }

        }).catch(err => res.json({ message: err.message }))



    })
    .catch(error => console.error('Error al buscar usuario', error));



})

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      // console.log("Sesión finalizada correctamente");
      // Eliminar el token de autenticación de la base de datos

      res.redirect("http://localhost:5173/login");
    }
  });
});
