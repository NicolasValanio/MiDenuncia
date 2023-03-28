
const express = require('express')
const app = express()
const routes = require('./routes/routeUsers/route')
const routesComment = require('./routes/routeComments/route')
const routeRequest=require('./routes/routeRequest/route')
const handleError = require('./handlers/handlerError')
const users = require('./routes/routeUsers/routeUSerAuth0')
dotenv.config()




const port = 4000

app.listen(port, console.log('el server escuchando por el puerto ' + port))

module.exports = {
    app
};
