//Nodemailer request
const postReq = (name, email, phone, subject, message) => {

  $.ajax('/mail', {
    method: 'POST',
    data: {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message
    }
  });
};

// Send the POST request.
$('#mail').on('click', (e) => {
  e.preventDefault();

  const name = $('#name-input').val().trim();
  const email = $('#email-input').val().trim();
  const phone = $('#phone-input').val().trim();
  const subject = $('#subject-input').val().trim();
  const message = $('#message-input').val().trim();

  postReq(name, email, phone, subject, message);
  alert(`Message sent`);
});
