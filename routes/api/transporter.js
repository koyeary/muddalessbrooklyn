const router = require('express').Router();
const nodemailer = require('nodemailer');
const config = require('config');

const user = config.MAIL_USER;
const pass = config.MAIL_PASS;

// POST route from contact form
router.post('/', (req, res, next) => {

    // Specify what the email will look like
    const mailOpts = {
      from: user, // This is ignored by Gmail
      to: 'katyeary@gmail.com',
      subject: `${req.body.subject}`,
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message} call ${req.body.phone}`
    };

    let transporter = nodemailer.createTransport({
      service: 'yahoo',
      auth: {
        user: user,
        pass: pass
      }
    });

  // Attempt to send the email
  transporter.sendMail(mailOpts, (error, res) => {
    if (error) {
      console.log(error);
      console.log(`Failed contact form attempt: ${mailOpts}`);
      //router.get('/failure'); 
    }
    else {
      //res.render('contact-success') 
      console.log('Contact-form attempt successful');
      console.log(res.response);
    }
  });

  // Debug / verification
  /*    transporter.verify(function (error, success) {
    if (error) {
      console.log('not connecting to smtp');
    } else {
      console.log('Server ready to take messages');
      console.log(mailOpts);
    }
  });  */
});

module.exports = router;
