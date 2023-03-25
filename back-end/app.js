
const express=require('express')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport');
const app=express()
const routes=require('./routes/routeUsers/route')
const routeRequest=require('./routes/routeRequest/route')
const handleError=require('./handlers/handlerError')
require('./middleware/auth2UserGoogle')

const session = require('express-session')



const config=require('./middleware/authUser')
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());



app.use(cors());

app.use(morgan('tiny'));

app.use('/',routes)
app.use('/',routeRequest)
app.use(handleError)


// app.use('/',routes)
// app.use('/',routeRequest)
// app.use(handleError)


// ------------------------------ Google OAuth2 ------------------------------ 
function isLoggedin(req, res,next) {
  request.user ? next() : res.sendStatus(401);
}

app.get('/',(req,res) => {
    res.send('<a href="/auth/google">Entrar por google</a>');
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

/* app.get('/auth/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: '/auth/failure', 
    successRedirect: '/protected'
})); */

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth/failure' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/protected');
  });



const port=4000

app.listen(port,console.log('el server escuchando por el puerto '+ port))