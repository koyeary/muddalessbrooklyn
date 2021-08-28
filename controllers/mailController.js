exports.mail = (req,res) => {
    res.render('mail/mail', {
      layout: 'main-registration'
    });
  };