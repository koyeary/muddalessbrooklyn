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

  const name = $('#name-input').val().trim();
  const email = $('#email-input').val().trim();
  const phone = $('#phone-input').val().trim();
  const subject = $('#subject-input').val().trim();
  const message = $('#message-input').val().trim();

  await postReq(name, email, phone, subject, message);

  $('#contactAlert').modal(console.log('modal click'));
});
 
// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  
