

const User=require('./models').user

////aqui hacemos las importaciones y que todo quede dentro de ella
const express = require('express');

const mongoose= require('./services/mongoDB')

const session = require('express-session');
const MongoDBStore  = require('connect-mongodb-session')(session);
//const MongoStore = require('connect-mongo')(session);
const Session = require('./services/sessionMongodb')

const cors = require('cors')
const dotenv = require('dotenv');


// const MongoDBStore = require('connect-mongodb-session')(session);
// const { MongoClient } = require('mongodb');

// const session = require('express-session');
//const { auth } = require('express-openid-connect');

dotenv.config()

const app=require('./app')

const passport= require('passport');

const cookieParser = require('cookie-parser')
const morgan = require('morgan')

//FIN
////////////////////////////////////////////////////////////////

///aqui se LLAMAN A A LAS RUTAS las rutas generales y que todo quede dentro de ella
const routes = require('./routes/routeUsers/route')
const routesComment = require('./routes/routeComments/route')
const routeRequest=require('./routes/routeRequest/route')
const routeEmail = require('./routes/routeEmail/nodemail')
const routeAuthGoogle = require('./routes/routeGoogle/route')
const handleError = require('./handlers/handlerError')


//FIN
////////////////////////////////////////////////////////////////
// const mongoStore = MongoStore.create({
//   mongoUrl: 'mongodb+srv://midenuncia:MIDENUNCIA2023@api-session.gu6bn9e.mongodb.net/api-session?retryWrites=true&w=majority',
//   mongoOptions: {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   },
//   ttl: 60 * 60 * 24 // Tiempo de vida de la sesión en segundos (en este caso, 1 día)
// });




/// codigo especial para procesar solicitudes HTTP y expres json lo convierta en json

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(cors()); //proteccion de cabecera
app.use(morgan('tiny'));//monitoreo de solicitudes
////////////////////////////////////////////////////////////////
// const store = new MongoDBStore({
//   uri: 'mongodb+srv://midenuncia:MIDENUNCIA2023@api-session.gu6bn9e.mongodb.net/api-sessions',
//   collection: 'session'
// });
// store.on('error', function(error) {
//   console.log(error);
// });


// app.use(session({
//   secret: 'This is a secret',
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
//   },
//   store: store,
//   // Boilerplate options, see:
//   // * https://www.npmjs.com/package/express-session#resave
//   // * https://www.npmjs.com/package/express-session#saveuninitialized
//   resave: true,
//   saveUninitialized: true
// }));


app.use(session({
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },

  resave: true,
  saveUninitialized: true,
  store: new MongoDBStore ({
    uri: 'mongodb+srv://midenuncia:MIDENUNCIA2023@api-session.gu6bn9e.mongodb.net/api-sessions',
    collection: 'mysessions',
   
  }),
 
 
// Guardar el documento en la colección
 
}));

///aqui se configura la ENTRADA  A LAS RUTAS trabajando  solo rutas
app.use(cookieParser())
app.use('/',routes)
app.use('/',routeRequest)
app.use('/', routesComment)
app.use('/',routeEmail)
app.use('/',routeAuthGoogle)




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
  const {token,email} = req.query;

   await User.findOne({where: {resetPasswordToken:token}})
  .then(user => {
  //  res.cookie(cookie_name , 'cookie_value', { maxAge: 900000, httpOnly: true ,sameSite:'lax'});
   // res.cookie('miCookie', 'prueba', { maxAge: 200000, httpOnly: true ,sameSite:'lax'});
   const session = new Session({
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        cookie: { originalMaxAge: 604800000, httpOnly: true, path: '/' },
      //  // sessionId: 'some_session_id',
        sessionData: user 
      });

      session.save()
    .then(() => {
      console.log('La sesión se ha guardado correctamente');
    })
    .catch((err) => {
      console.log('Error al guardar la sesión:', err);
    });
    const url = `http://localhost:5173/contrasenaNueva?token=${user.resetPasswordToken}&email=${user.email}}`;
  res.redirect(url)
  }).catch(err => {
    res.send('token no funciona')
  });
 
  

  //data ?  res.status(200).json(data) : res.json({message: 'asegurese de su usuario este registrado'});
  
  /* try {
    if(data === null){
      res.status(400).json({ message: 'vuelva a enviar enlace' });
    }
    const url = `http://localhost:5173/contrasenaNueva?data=${data}`;
    res.redirect(url)
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  } */
})

////////////////////////////////////////////////////////////////
//INICIO
app.get('/newPassword', async (req, res) => {
  //const miCookie = req;

  const encryptedCookie = req; // aquí va la cookie encriptada



console.log(encryptedCookie);
 //
  
  //console.log(miCookie,req.cookies);
  // try {
  //   let {password, password2} = req.body;
  //   let user = await User.findOne({ where: {email}})
  //   if(user){
  //     password2 = bcrypt.hashSync(password2,10);
  //     await User.update({password: password2},
  //       {where: {email: email}})
  //       .then(user => res.status(200).json({ message: 'cambio de contraseña exitoso!'}))
  //       .catch(err => res.json({ message: err.message }))
  //   }else{
  //     res.status(400).json({ message: "no se pudo" })
  //   }
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
})

// app.put('/newPassword', async (req, res) => {
//   const {email} = req.query;
//    // email ? console.log('llega') : console.log('no llega')
//   try {
//     let {password, password2} = req.body;
//     let user = await User.findOne({ where: {email}})
//     if(user){
//       password2 = bcrypt.hashSync(password2,10);
//       await User.update({password: password2},
//         {where: {email: email}})
//         .then(user => res.status(200).json({ message: 'cambio de contraseña exitoso!'}))
//         .catch(err => res.json({ message: err.message }))
//     }else{
//       res.status(400).json({ message: "no se pudo" })
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// })