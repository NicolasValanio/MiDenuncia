

const GOOGLE_CLIENT_ID = '960507511532-7bsiql7u8m9u19msf2uoebsqrpog7sqp.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
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
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/google/callback"
  },
  async (accessToken, refreshToken, profile, cb) => {
    try {
      console.log(profile);
      //const existingUser = await users.findOne({where:{nickname: profile.id}})
      //creo el usuario
      //console.log(existingUser)
      // if(existingUser){
      //    return cb(null,existingUser)
      //    console.log(JSON.stringify(existingUser.nickname));
      //  }else{
        
       // console.log('aqui estoy tyoooooooooooooo')
       
          
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




