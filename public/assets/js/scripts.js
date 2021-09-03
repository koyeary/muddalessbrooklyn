//Stick navbar
const height = $(window).height();

$(window).on('scroll', () => {
  if (window.scrollY > height - 50) {
    $('.navbar').addClass('fixed-top shadow');
    $('.navbar').removeClass('mt-n4');
    $('.links').addClass('my-3');
    $('span').removeClass('d-none py-2');
    $('a').removeClass('main-nav btn pb-2 pt-2 px-4');
    $('ul').addClass('secondary-nav');
    
  } else {
    $('.navbar').removeClass('fixed-top shadow');
    $('.navbar').addClass('mt-n4');
    $('.links').removeClass('my-3');
    $('span').addClass('d-none');
    $('a').addClass('main-nav btn pb-2 pt-2 px-4');
    $('ul').removeClass('secondary-nav');
  }
})

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
$('#mail').on('click', async (e) => {
  e.preventDefault();

  try {
    const name = $('#name-input').val().trim();
    const email = $('#email-input').val().trim();
    const phone = $('#phone-input').val().trim();
    const subject = $('#subject-input').val().trim();
    const message = $('#message-input').val().trim();

    await postReq(name, email, phone, subject, message);

    $('#contactAlert').modal('show');
  } catch (err) {
    console.error(err);
  }
});

// Modal Image Gallery

 $('.lightbox').on('click', (e) => {
   e.preventDefault();

  const thisId = e.currentTarget.id;
  $(`#my${thisId}`).modal('show');
});

$('.btn-close').on('click', () => {
  const myId = $(this).attr('id');
  $(`#my${myId}`).modal('hide');
}); 
 