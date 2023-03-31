const modelUser=require('../../models').user

exports.resetPassword=async (req, res) => {
    const { token, email } = req.query;
  
    try {
      const user = await modelUser.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });
  
      if (!user) {
        return res.status(404).json({ message: 'Token inválido o expirado' });
      }
      const url = `/verificacionToken?token=${token}&email=${email}`
      res.redirect(url)
      //res.status(200).json({ message: 'prueba', token: token });//redirigimos al front 
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' }); 
    }
  }


  