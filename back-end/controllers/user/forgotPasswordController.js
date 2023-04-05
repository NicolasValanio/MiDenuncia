

exports.forgotPassword=async(req, res, next) => {
    //console.log(req.body.email)
    const redirectUrl = '/send-mail?email=' + req.body.email;
    res.redirect(redirectUrl);
  }