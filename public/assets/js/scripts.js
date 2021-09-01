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

    $('#contactAlert').modal(console.log('sent'));
  } catch (err) {
    console.error(err);
  }
});

//Load image gallery


/*  Handlebars.registerHelper('image-list', () => {
  return this.path;
}); */
/* $('img').on('click', (e) => {
  e.preventDefault();
  const zoom = $('#imageZoom').modal(console.log('zoom'));


}) */

/*    $('#imageZoom').on('show.bs.modal', (e) => {
    const button = $(e.relatedTarget);
    const image = button.data('whatever');
  
    const zoom = $('#imageZoom').modal(console.log('zoom'));
    zoom.find('#image').prop('src', image);
  });  */

//$('.lightbox').modal(console.log('zoom'));
/* $('.lightbox').on('show.bs.modal', (e) => {
  const button = $(e.relatedTarget);
  const image = button.data('whatever');
  const modal = $(this);

  modal.find('gallery-image').attr('src', image);
}); */
//clear form on modal close
//$('#messageSent').on('click', location.reload());
