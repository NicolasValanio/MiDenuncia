const express=require('express')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport');
const app=express()
const routes=require('./routes/routeUsers/route')
const routeRequest=require('./routes/routeRequest/route')
const handleError=require('./handlers/handlerError')
require('./middleware/auth2UserGoogle')

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(cors());

app.use(morgan('tiny'));

// app.use('/',routes)
// app.use('/',routeRequest)
// app.use(handleError)


// ------------------------------ Google OAuth2 ------------------------------ 

// app.use('/',middlewareAuth2User,(req,res) => {
//     res.send('hola')
// });

// app.get('/',(req,res) => {
//     res.send('<a href="/auth/google">Entrar por google</a>');
// })


// app.get('/auth/google',
//   passport.authenticate('google', { scope:
//       [ 'email', 'profile' ] }
// ));

// app.get( '/auth/google/callback',
//     passport.authenticate( 'google', {
//         successRedirect: '/auth/google/success',
//         failureRedirect: '/auth/google/failure'
// }));

// app.get('/auth/google',
//     passport.authenticate('google', {scope: ['email', 'password']})
// )

app.get('/',(req,res) => {
    res.send('<a href="/auth/google">Entrar por google</a>');
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/proteced');
  });

  app.get('/proteced', (req,res) => {
    res.send('Holaaaa');
});




const port=4000

app.listen(port,console.log('el server escuchando por el puerto '+ port))