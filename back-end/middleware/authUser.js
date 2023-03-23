require('dotenv').config();
module.exports= config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH_SECRET,
    baseURL: process.env.AUTH_BASE_URL,
    clientID: process.env.AUTH_CLIENT_ID,
    issuerBaseURL: process.env.AUTH_BASE_URL 
    
  };
  
  console.log(config);
  