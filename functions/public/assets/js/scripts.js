//Nodemailer request
const postReq = (sender, email, phone, subject, message) => {
  $.ajax('/api/mail', {
    method: 'POST',
    data: {
      sender: sender,
      email: email,
      phone: phone,
      subject: subject,
      message: message
    },
    success: (res) => {
      alert(`Thanks, ${sender}. Your message has been sent`);
      console.log(res);
      location.reload();
    }
  });
};

$('#mailSubmit').on('click', (e) => {
  e.preventDefault();

  const sender  = $('.sender').val().trim();
  const email   = $('.email').val().trim();
  const phone   = $('.phone').val().trim();
  const subject = $('.subject').val().trim();
  const message = $('.message').val().trim();

  postReq(sender, email, phone, subject, message);
});

