
const app=require('./app')

const User=require('./models').user

////aqui hacemos las importaciones y que todo quede dentro de ella
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
// const session = require('express-session');
//const { auth } = require('express-openid-connect');
const morgan = require('morgan')
dotenv.config()

const passport= require('passport');

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


/// codigo especial para procesar solicitudes HTTP y expres json lo convierta en json
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



// app.get('/reset-password', async (req, res) => {
//   const { token, email } = req.query;

//   try {
//     const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });

//     if (!user) {
//       return res.status(404).json({ message: 'Token inválido o expirado' });
//     }
//     const url = `/verificacionToken?token=${token}&email=${email}`
//     res.redirect(url)
//     //res.status(200).json({ message: 'prueba', token: token });//redirigimos al front 
//   } catch (error) {
//       res.status(500).json({ message: 'Error interno del servidor' }); 
//   }
// });

//otra ruta// Cambio de contraseña

app.get('/verificacionToken', async (req, res) => {
  const {token,email} = req.query;
  const data = await User.findOne({where: {email}});

  //data ?  res.status(200).json(data) : res.json({message: 'asegurese de su usuario este registrado'});
  const url = `http://localhost:5173/contrasenaNueva?token=${data.token}&email=${data.email}}`;
  res.redirect(url)
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
  const referer = req.headers.referer;
  const urlParams = new URLSearchParams(referer.slice(referer.indexOf('?')));
  const email = urlParams.get('email');
  console.log(req.headers)
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