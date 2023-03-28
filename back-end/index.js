
const app=require('./app')

const User=require('./models').user

////aqui hacemos las importaciones y que todo quede dentro de ella
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const session = require('express-session');
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

//FIN
////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////
//INICIO
//codigo especial para los usuarios de GOOGLE
app.use(session({
  secret: 'MIDENUNCIA',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


require('./middleware/auth2UserGoogle')


app.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));


  app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),(req, res)=> {
 
     res.redirect('/redirect');
    
  });

  app.get('/redirect', function(req, res) {
    res.redirect('http://localhost:5173/usuarioLog');
  });

  
//FIN
////////////////////////////////////////////////////////////////

//INICIO
////////////////////////////////////////////////////////////////


app.post('/forgot-password',(req,res,next)=>{
  const redirectUrl = '/send-mail?email=' + req.body.email; 
  res.redirect(redirectUrl); 
})

app.get('/reset-password', async (req, res) => {
  const { token } = req.query;

  try {
    const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });

    if (!user) {
      return res.status(404).json({ message: 'Token inválido o expirado' });
    }

    res.render('reset-password-form', { token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});


////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
//INICIO
//sesion para guardar logueado:

const Sequelize=require('sequelize')

const SequelizeStore = require('connect-session-sequelize')(session.Store)

const dbSequelize=new Sequelize('miDenuncia', 'root', null, {//instancia de sequelize

  dialect: 'sqlite',
  storage: 'session.sqlite' //este sera el archivo de almacenamiento

})

app.use(session({
  secret: 'midenunciasecreta',
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({//configuramos que sequelize sea el que almacene esa session
    db: dbSequelize

  })
}))

dbSequelize.sync()//aqui sincronizamos la bd con el modelo de sesion


///estamos guardando la info de sesion en la bd en vez de la memoria del servidorr
//por lo tanto la sesion esta persistente


app.post('/login',async(req,res)=>{

  req.session.user=User //establecemos la sesion activa aqui

res.redirect('http://localhost:5173/usuarioLog')

res.send('Inicio de sesión exitoso')



})



app.get('/usuarioLog',async(req,res)=>{

  if (!req.session.user) {

    res.send('inicia sesion primero')
    res.redirect('/login');
    return;
  }

  const userSession=req.session.user //obtenemos el usuario de la sesion

  if(req.session.user){

    res.send('bienvenida')

  }
    
  

  res.render('usuarioLog',{userSession}) //renderizamos la pagina de inicio

})

//FIN
////////////////////////////////////////////////////////////////