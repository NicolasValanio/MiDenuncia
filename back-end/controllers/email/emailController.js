const nodemailer = require('nodemailer');
const User = require('../../models').user;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const oAuth2Client = new google.auth.OAuth2(process.env.EMAIL_AUTH_CLIENT_ID,
  process.env.EMAIL_AUTH_CLIENT_SECRET,
          "https://developers.google.com/oauthplayground");
oAuth2Client.setCredentials({ refresh_token:process.env.EMAIL_AUTH_CLIENT_REFRESH_TOKEN,tls: {
              rejectUnauthorized: false
          } });

// Configurar el transporter de Nodemailer con la API de Gmail de Google
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_AUTH_USER,
    clientId:process.env.EMAIL_AUTH_CLIENT_ID,
    clientSecret: process.env.EMAIL_AUTH_CLIENT_SECRET,
    refreshToken: process.env.EMAIL_AUTH_CLIENT_REFRESH_TOKEN,
    accessToken: oAuth2Client.getAccessToken(),
  },
});

////// RUTA DE ENVIO DE EMAIL

exports.sendEmail= async (req,res)=>{




  
  try {
    const { email } = req.query;

   
 
    const user = await User.findOne({where:{ email} }).then(user=>{
      const token = jwt.sign({ userId:user.id }, process.env.JWT_SECRET, { expiresIn: '30m' });
     user.resetPasswordToken  = token;
    
   
    user.resetPasswordExpires = Date.now() + 1800000; // 30 minutos en milisegundos
     user.save();

    const resetPasswordUrl = `http://localhost:4000/reset-password?token=${token}&email=${user.email}`;
    const mailOptions = {
      to: user.email,
      subject: 'Restablecimiento de contraseña',
      html: `<div>Para restablecer tu contraseña, haz clic en el siguiente enlace: <a href="${resetPasswordUrl}">${resetPasswordUrl}</a></div>`
    };
   
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(400).json({message:'Email no es válido' })
      } else {
        res.status(200).json({message:`Correo electrónico enviado!`,message2:"verifica tu bandeja de entrada" })
      }})
          //res.json({ message: 'Correo electrónico enviado' });


    }).catch(err=>{
      res.status(404).json({ message: 'Usuario no encontrado' });
    })

   
     
    
      

    
  } catch (error) {
   // console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}