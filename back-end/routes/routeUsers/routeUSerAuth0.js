const express=require('express')
const router= express.Router();
const { requiresAuth } = require('express-openid-connect');

router.get('/login', (req, res) => {
    
   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
  });




  router.get('/profile', requiresAuth(), (req, res) => {
    res.send(req.oidc.user);
  });



module.exports=router