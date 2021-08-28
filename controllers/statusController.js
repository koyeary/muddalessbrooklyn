
exports.success = (req,res) => {
    res.render('status/success', {
      layout: 'main-registration'
    });
  };


exports.failure = (req,res) => {
    res.render('status/failure', {
      layout: 'main-registration'
    });
  };