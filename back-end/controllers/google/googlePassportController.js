

const passport= require('passport');

require('../../middleware/auth2UserGoogle')
const passportGoogle=passport.authenticate('google', { scope: ['profile','email'] })


module.exports = passportGoogle