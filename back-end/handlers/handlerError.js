
module.exports=(err, req, res, next)=> {
  
  // send an error response to the client
  res.status(500).send('usuario existente');

  }