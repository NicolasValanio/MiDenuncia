const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const routes = require('./routes/routeUsers/route')
const routesComment = require('./routes/routeComments/route')
const routeRequest=require('./routes/routeRequest/route')
const handleError = require('./handlers/handlerError')

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.use(cors());

app.use(morgan('tiny'));

app.use('/', routes)
app.use('/',routeRequest)
app.use('/', routesComment)

app.use(handleError)

const port = 4000

app.listen(port, console.log('el server escuchando por el puerto ' + port))

module.exports = {
    app
};
