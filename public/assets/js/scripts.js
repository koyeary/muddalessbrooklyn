//Stick navbar
const height = $(window).height();

$(window).on('scroll', () => {
  if (window.scrollY > height - 200) {
    $('.floating-btn').addClass('visible');
    $('.floating-btn').removeClass('invisible');
  } else {
    $('.floating-btn').removeClass('visible');
    $('.floating-btn').addClass('invisible');
  }
});

//Nodemailer request

const postReq = (sender, email, phone, subject, message) => {

  $.ajax('/api/mail', {
    method: 'POST',
    data:{
      sender: sender,
      email: email,
      phone: phone,
      subject: subject,
      message: message
    },
    success: (res) => {
      console.log(res.data);
      //$('#contactAlert').modal(console.log(res));
      //alert(`Contact successful: ${res.data}`);
    }
  });
};

$('#mailSubmit').on('click', (e) => {
  e.preventDefault();

  const sender = $('.sender').val().trim();
  const email = $('.email').val().trim();
  const phone = $('.phone').val().trim();
  const subject = $('.subject').val().trim();
  const message = $('.message').val().trim();

  //console.log(JSON.stringify({sender, email, phone, subject, message}));
  postReq(sender, email, phone, subject, message);
  alert('message sent');
  //location.reload();
});

/*   //Image popup
  const confirmSubmit = () => {
    $('#mailSubmit').magnificPopup({
      removalDelay: 400,
      type: inline,
      items: {
        src: `<h4>Thank you.</h4>Your message has been sent. We'll be in touch.`,
        closeBtnInside: true
      }
    });
  } */

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
