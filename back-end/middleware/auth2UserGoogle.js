const dotenv = require('dotenv');
dotenv.config()
const {json} = require('sequelize');

const users=require('../models').user;
const passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user,done)=> {
  done(null,user)
})

passport.deserializeUser((user,done)=> {
  done(null,user)
}) 

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/google/callback"
  },
  async (accessToken, refreshToken, profile, cb) => {
    try {
     // console.log(profile)
     //console.log(profile)
           
     const [user, created] = await users.findOrCreate({
      where: { email:profile.emails[0].value },
      defaults: { 
          name: profile.name.givenName,
          last_name: profile.name.familyName,
          email: profile.emails[0].value
      }
  });
          // console.log(user)
           
           if (created) {
            //console.log(user + "arribbbaaaa ")
           ///res.redirect('/login');

            cb(null, user);
          } else {
            // Si se encontró un usuario existente, se podría redirigirlo a la página de inicio
           // res.redirect('/login');
          // console.log(user + "aaauiiii yoooooo")
            cb(null, user);
          }
          
       

    
    } catch (err) {
      cb(err);
    }
  }
));
