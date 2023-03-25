const GOOGLE_CLIENT_ID = '304053125557-bseggul5rjtb6l9kqo6obfl9vdttes5a.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
const users=require('../models').user;
const passport = require('passport');

let GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/auth/google/callback",

},
  function(accessToken, refreshToken,profile, cb) {
    users.findOne({where:{ nickname: profile.id }},
          function (err, user)  {
      return cb(null ,user);
      }); 
    return profile
  }
));


passport.serializeUser((user,done)=> {
    done(null,user)
})

passport.deserializeUser((user,done)=> {
    done(null,user)
}) 
