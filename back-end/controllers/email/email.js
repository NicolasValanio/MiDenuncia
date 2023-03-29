const nodemailer = require('nodemailer');
const User = require('../../models').user;
const jwt = require('jsonwebtoken');

const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

exports.sendEmail= async (req,res)=>{

const accountTransport = require("../../services/accountTransport.json");

const oAuth2Client = new google.auth.OAuth2(accountTransport.auth.clientId,
          accountTransport.auth.clientSecret,
          "https://developers.google.com/oauthplayground");
oAuth2Client.setCredentials({ refresh_token: accountTransport.auth.refreshToken,tls: {
              rejectUnauthorized: false
          } });

// Configurar el transporter de Nodemailer con la API de Gmail de Google
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'kandres38@gmail.com',
    clientId:accountTransport.auth.clientId,
    clientSecret: accountTransport.auth.clientSecret,
    refreshToken: accountTransport.auth.refreshToken,
    accessToken: oAuth2Client.getAccessToken(),
  },
});

  
  try {
    const { email } = req.query;

   
 
    const user = await User.findOne({where:{ email} }).then(user=>{
      const token = jwt.sign({ userId:user.id }, 'secret', { expiresIn: '30m' });
     user.resetPasswordToken  = token;
    
   
    user.resetPasswordExpires = Date.now() + 1800000; // 30 minutos en milisegundos
     user.save();

    const resetPasswordUrl = `http://localhost:4000/reset-password?token=${token}`;
    const mailOptions = {
      to: user.email,
      subject: 'Restablecimiento de contraseña',
      html: `<div>Para restablecer tu contraseña, haz clic en el siguiente enlace: <a href="${resetPasswordUrl}">${resetPasswordUrl}</a></div>`
    };
   
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(400).json({message:'Email no es válido' })
      } else {
        res.status(200).json({message:`Correo electrónico enviado \n verifica tu bandeja de entrada:${info.response}` })
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