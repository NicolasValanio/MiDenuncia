
const express = require('express')
const app = express()


const port= 4000

app.listen(port, () => {
  console.log('El servidor está escuchando en el puerto ' + port);
});

module.exports = app;
