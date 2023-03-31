const express = require('express');

const router = express.Router()
const passport= require('passport');
const session = require('express-session');
const googleController = require('../../controllers/google/googlePassportController')
const app=require('../../app')
app.use(session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  //app.use(passport.session());
  

router.get('/google', googleController);

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),(req, res)=> {
 //console.log(req.user)
   // res.redirect('/redirect');
  res.status(200).json({message: 'Success',user:{id:req.user.id,name:req.user.name,email:req.user.email}})
   
 })

//  router.get('/redirect', function(req, res) {
    
//    res.status(200).json({message: 'Success',})
//     // res.redirect('http://localhost:5173/usuarioLog');
//   });
//router.get('/google', googleController.googleCallback);
module.exports = router