const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const app=express()
const routes=require('./routes/routeUsers/route')
const routetypeReport=require('./routes/routeTypesReport/route')
const routetypeRequest=require('./routes/routetypesRequest/route')
const routeRequest=require('./routes/routeRequest/route')
const routeReport=require('./routes/routeReport/route')
const routeRole=require('./routes/routeRole/route')
const routeRating=require('./routes/routeRating/route')
const handleError=require('./handlers/handlerError')


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.use(cors());


app.use(morgan('tiny'));
app.use('/',routeRequest)
app.use('/',routetypeRequest)
app.use('/',routetypeReport) 
app.use('/',routeReport)
app.use('/',routeRole)
app.use('/',routes)
app.use('/',routeRating)
app.use(handleError)
const port = 4000

app.listen(port, console.log('el server escuchando por el puerto ' + port))

 module.exports = {
    app
};  
