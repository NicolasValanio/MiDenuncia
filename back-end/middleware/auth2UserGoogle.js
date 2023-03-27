const dotenv = require('dotenv');
dotenv.config()

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

          const [user, created] = await users.findOrCreate({
            where: { nickname: profile.id,name:profile.displayName,last_name:profile.name.familyName,email:profile.emails[0].value,avatar:profile.photos[0].value },
            defaults: { nickname:profile.id,name:profile.displayName,last_name:profile.name.familyName,email:profile.emails[0].value,avatar:profile.photos[0].value }
          });
          
          if (created) {
          ///res.redirect('/login');
          cb(null, user);
          } else {
          // Si se encontró un usuario existente, se podría redirigirlo a la página de inicio
          // res.redirect('/login');
          cb(null, user);
          }
    //  }
     //con esto retorno el perfil par que passport lo utilize
    } catch (err) {
      cb(err);
    }
  }
));

