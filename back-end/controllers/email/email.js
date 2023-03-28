
const nodemailer = require('nodemailer');

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
    const mailOptions = {
      from: 'kandres38@gmail.com',
      to: 'kandres38@gmail.com',
      subject: 'dgfhdfhdfm',
      html:  `<p>Hola,</p><p>Hemos recibido una solicitud para restablecer la contraseña de tu cuenta. Si no has solicitado este cambio, puedes ignorar este mensaje.</p><p>Si el enlace no funciona, copia y pega la siguiente URL en tu navegador:</p>`,
    // `<p>Hola,</p><p>Hemos recibido una solicitud para restablecer la contraseña de tu cuenta. Si no has solicitado este cambio, puedes ignorar este mensaje.</p><p>Para restablecer tu contraseña, haz clic en el siguiente enlace:</p><p><a href="${resetPasswordUrl}">${resetPasswordUrl}</a></p><p>Si el enlace no funciona, copia y pega la siguiente URL en tu navegador:</p><p>${resetPasswordUrl}</p>`,
    };
    const result = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Correo electrónico enviado correctamente', result });
  } catch (error) {
    res.status(500).json({ message: 'Ocurrió un error al enviar el correo electrónico', error });
  }
}