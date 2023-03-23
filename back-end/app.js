const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// 
const routes = require("./routes/routeUsers/route");
const documentRoutes = require("./routes/routeDocuments/document");
const roleRoutes = require("./routes/routeRoles/role");

app.use("/", routes,);
app.use('/documents', documentRoutes);
app.use('/roles', roleRoutes);

// 
const handleError = require("./handlers/handlerError");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use(morgan("tiny"));


app.use(handleError);

const port = 4000;

app.listen(port, console.log("El server escuchando por el puerto " + port));
