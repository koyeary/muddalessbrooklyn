const router = require("express").Router();
const nodemailer = require("nodemailer");

const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PASS;

// POST route from contact form
router.post("/", async (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
      user: user,
      pass: pass,
    },
  });

  const mailOpts = {
    from: user,
    to: "katyeary@gmail.com",
    subject: `${req.body.subject}`,
    text: `${req.body.sender} (${req.body.email}) says: ${req.body.message} call ${req.body.phone}`,
  };

  transporter.sendMail(mailOpts, (error, res) => {
    if (error) {
      console.error(error);
      console.log(`Failed contact form attempt: ${mailOpts}`);
    } else {
      console.log("Contact-form attempt successful");
    }
  });
  next(res.json({ msg: "Your message has been sent" }));
});

module.exports = router;
