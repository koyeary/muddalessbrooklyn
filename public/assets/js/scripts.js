//Stick navbar
const height = $(window).height();

$(window).on('scroll', () => {
  if (window.scrollY > height -200) {
    $('.floating-btn').addClass('visible');
    $('.floating-btn').removeClass('invisible');
  } else {
    $('.floating-btn').removeClass('visible');
    $('.floating-btn').addClass('invisible');
  }
});

//Nodemailer request
const postReq = (name, email, phone, subject, message) => {
  $.ajax('/api/mail', {
    method: 'POST',
    data: {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message
    },
    success: (res) => {
      //$('#contactAlert').modal(console.log(res));
      alert(res.data);
    }
  });
};

$('#mailSubmit').on('click', (e) => {
  e.preventDefault();

  const name = $('#name-input').val().trim();
  const email = $('#email-input').val().trim();
  const phone = $('#phone-input').val().trim();
  const subject = $('#subject-input').val().trim();
  const message = $('#message-input').val().trim();

  postReq(name, email, phone, subject, message);
  alert('message sent');
  location.reload();
});

// Send the POST request.
//$('#mail').on('submit', (e) => {

//e.preventDefault();

//postReq(myName, email, phone, subject, message);

//await console.log(`${name} ${email} ${phone} ${subject} ${message}`);
//await postReq();
//$('#contactAlert').show();

//});
/* $('#messageSent').on('click', () => {
  location.reload();
}); */

//


