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
/* const modal = $('#myModal');

const modalImg = $('#img01');
*/

$('.lightbox').on('click', () => {
  $('#exampleModal').modal('show');
console.log('at least i can click it');
});


 

// Close the modal
/* const span = $('.close');
span.on('click', () => {
  modal.style.display = 'none';
})
 */
/*var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} */
