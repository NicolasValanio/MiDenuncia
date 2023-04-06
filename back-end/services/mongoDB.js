//const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config()

const mongoose = require('mongoose');
const uri = 'mongodb+srv://midenuncia:MIDENUNCIA2023@api-session.gu6bn9e.mongodb.net/api-sessions?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => console.log(err));

module.exports = mongoose;

// URI de conexión a la base de datos en Atlas


// // Opciones de conexión a la base de datos
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// // Crear una instancia de cliente de MongoDB
// const client = new MongoClient(uri, options);

// // Conectar al servidor de MongoDB
// client.connect((err) => {
//   if (err) {
//     console.log('hubo un error ',err);
//     return;
//   }

//     console.log('Conexión exitosa a la base de datos en Atlas');


  

//   // Obtener la base de datos deseada
// //   const db = client.db('<database>');

// //   Obtener la colección deseada
// //   const collection = db.collection('<collection>');

// //   Insertar un documento en la colección
// //   const doc = { nombre: 'Juan', edad: 30 };
// //   collection.insertOne(doc, (err, result) => {
// //     if (err) {
// //       console.error(err);
// //       return;
// //     }

// //     console.log(`Documento insertado con éxito: ${result.insertedId}`);
// //   });

// //   Recuperar todos los documentos en la colección
// //   collection.find({}).toArray((err, docs) => {
// //     if (err) {
// //       console.error(err);
// //       return;
// //     }

// //     console.log('Documentos encontrados:');
// //     console.log(docs);
// //   });
// });

// const { MongoClient } = require('mongodb');

// const uri = process.env.MONGO_URI || "mongodb+srv://midenuncia:MIDENUNCIA2023@api-session.gu6bn9e.mongodb.net/api-session?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function connect() {
//   try {
//     // Conectar al servidor de MongoDB Atlas
//     await client.connect();
//     console.log('Conexión exitosa');

//     // Seleccionar una base de datos
//     const db = client.db('mydatabase');

//     // Realizar operaciones en la base de datos
//     // ...
//   } catch (error) {
//     console.error('Error de conexión:', error);
//   } finally {
//     // Cerrar la conexión
//     await client.close();
//     console.log('Conexión cerrada');
//   }
// }

// connect();
// const dbName = 'myDatabase';

// // Collection Name
// const collectionName = 'myCollection';

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://midenuncia:MIDENUNCIA2023@api-session.gu6bn9e.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//     return console.log('mall ')
//   client.close();
// });
// console.log('conexion exitosa')

// const db = client.db(dbName);

// // Create a new collection
// db.createCollection(collectionName, (err, result) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log(`Collection '${collectionName}' created successfully`);

//   // Close the connection
//   client.close();
// });

