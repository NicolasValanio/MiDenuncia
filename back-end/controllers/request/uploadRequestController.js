const multer = require ('multer');

const storage = multer.diskStorage({
    // destination: function(req, file, cb){
    //     cb(null, 'imagenes');
    // },
    filename: function(req, file, cb){
        // cb(null, file.fieldname+'-'+DataTransfer.now()); 
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage })

exports.upload = upload.single('myFile'); // 'myFile' es la key para usar en el postman y seleccionamos form-data 

exports.uploadFile = (req, res) => {
    res.send({ data: 'Enviar un archivo' })
}