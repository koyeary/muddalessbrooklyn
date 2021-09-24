'use strict';

$(window).on('load', () => {
  //Loader, Preloader
  $('.loader').fadeOut();
  $('#preloader').delay(400).fadeOut('slow');

  if ($('.portfolios-area').length > 0) {
    const containerEl = document.querySelector('.portfolios-area');
    const mixer = mixitup(containerEl);
  }
});

(($) => {
  //Navbar: toggle gallery images
  $('.nav-switch').on('click', (e) => {
    $('.main-menu').slideToggle(400);
    e.preventDefault();
  });

  //Set image background for gallery blocks
  $('.set-bg').each(function () {
    const bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });

  //	Gallery layout
  const port_fi = $('.portfolios-area .first-item'),
    port_si = $('.portfolios-area .second-item'),
    port_intro_h = $('.portfolio-intro').innerHeight();

  if ($(window).width() > 991) {
    port_fi.appendTo('.portfolio-intro');
    port_si.find('.portfolio-item').height(port_intro_h + 601);
  }

  $('.portfolio-item.pi-style2').each(function () {
    const pi_width = $(this).width();
    $(this).height(pi_width + 50);
  });

  //Image popup
  $('.portfolio-item').magnificPopup({
    type: 'image',
    mainClass: 'img-popup-warp',
    removalDelay: 400
  });

  //Display active link on nav menu
  $('.panel-link').on('click', (e) => {
    $('.panel-link').parent('.panel-header').removeClass('active');
    const $this = $(this).parent('.panel-header');
    if (!$this.hasClass('active')) {
      $this.addClass('active');
    }
    e.preventDefault();
  });

  //Initialize loader
  if ($().circleProgress) {
    //Set progress circle 1
    $('#progress1').circleProgress({
      value: 0.75,
      size: 146,
      thickness: 3,
      fill: '#979797',
      emptyFill: 'rgba(0, 0, 0, 0)'
    });
    //Set progress circle 2
    $('#progress2').circleProgress({
      value: 0.83,
      size: 146,
      thickness: 3,
      fill: '#979797',
      emptyFill: 'rgba(0, 0, 0, 0)'
    });
    //Set progress circle 3
    $('#progress3').circleProgress({
      value: 0.25,
      size: 146,
      thickness: 3,
      fill: '#979797',
      emptyFill: 'rgba(0, 0, 0, 0)'
    });
    //Set progress circle 4
    $('#progress4').circleProgress({
      value: 0.95,
      size: 146,
      thickness: 3,
      fill: '#979797',
      emptyFill: 'rgba(0, 0, 0, 0)'
    });
  }
})(jQuery);

const postReq = (rating, notes, _id) => {
  $.ajax('/api/images/:id', {
    method: 'PUT',
    data: {
      rating: rating,
      notes: notes,
      _id: _id
    },
    success: (res) => {
      alert(`Image ${_id} updated`);
      //location.reload();
    }
  });
};

$('button').on('click', (e) => {
  e.preventDefault();

  const _id     = e.target.value;
  const rating  = $(`#rating-${_id}`).val().trim();
  const notes   = $(`#notes-${_id}`).val().trim();

  postReq(rating, notes, _id);
});
