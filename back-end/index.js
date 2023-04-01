
const app=require('./app')
const bcrypt=require('bcrypt')

const User=require('./models').user
const SessionModel=require('./modeloMongo/sessionMongodb')

////aqui hacemos las importaciones y que todo quede dentro de ella
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
// const session = require('express-session');
//const { auth } = require('express-openid-connect');
const morgan = require('morgan')
dotenv.config()
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const passport= require('passport');


let cookieParser = require('cookie-parser')

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
mongoose.connect('mongodb+srv://midenuncia:MIDENUNCIA2023@api-session.gu6bn9e.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 // useCreateIndex: true
});


app.use(session({
  secret: 'mysecret', // secreto para firmar las cookies de sesión
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb+srv://midenuncia:MIDENUNCIA2023@api-session.gu6bn9e.mongodb.net/?retryWrites=true&w=majority',
  crypto: {
    secret: 'secret'
  },
  collection: 'sessions',
  // expires: 60 * 60 * 24 * 7, // 7 days
  expires: 120, // 2 minutes
  model: SessionModel,
  
  // ttl: 24 * 60 * 60, // 1 día de vida útil })
})}));


//////////////////////////////////


/// codigo especial para procesar solicitudes HTTP y expres json lo convierta en json
app.use(cookieParser())
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(cors()); //proteccion de cabecera
app.use(morgan('tiny'));//monitoreo de solicitudes
////////////////////////////////////////////////////////////////

///aqui se configura la ENTRADA  A LAS RUTAS trabajando  solo rutas

app.use('/',routes)
app.use('/',routeRequest)
app.use('/', routesComment)
app.use('/',routeEmail)
app.use('/',routeAuthGoogle)

//FIN
////////////////////////////////////////////////////////////////






//INICIO
////////////////////////////////////////////////////////////////




//otra ruta// Cambio de contraseña

app.get('/verificacionToken', async (req, res) => {
  const { v4: uuidv4 } = require('uuid');

  //const uniqueId = uuidv4();
  const {token,email} = req.query;
   await User.findOne({where: {resetPasswordToken:token}})
  .then(user => {
    const user1=new SessionModel
    user1.sessionID=req.sessionID
    user1.session=user.email
    identificadorUUI=uuidv4()
    user1.save()
    req.session.email=user.email
   
    //res.cookie('miCookie', user.email, { maxAge: 900000,httpOnly: true });
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
app.put('/newPassword', async (req, res) => {

  let {password, password2} = req.body;




//console.log(email);
const seesionid = Object.keys(req.sessionStore.sessions)[0]
//console.log(seesionid)

const sessioUser= await SessionModel.findOne({ sessionID: seesionid })
  .then(user => {
   
    
   
      User.findOne({ where: {email:user.session}})
        .then(user=>{
          if(user){
           
            password2 = bcrypt.hashSync(password2,10);
             User.update({password: password2},
              {where: {email: user.email}})
              .then(user => res.status(200).json({ message: 'cambio de contraseña exitoso!'}))
              .catch(err => res.json({ message: err.message }))
          }else{
            res.status(400).json({ message: "no se pudo" })
          }

        }).catch(err => res.json({ message: err.message}))
      


  })
  .catch(error => console.error('Error al buscar usuario', error));


  
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