$(document).ready( () => {

/*
  if($(window).width() < 767) {
    $('.appartment-description > h3').after($('.chosen-appartment-image'));
    $('.amenities-section').after($('.image-slider'));
  }
*/

// hide menu on click outside the element

  $(document).click(function(event) {
    if(!$(event.target).closest('.header-navbar .dropdown-menu').length) {
      if($('.header-navbar .dropdown-menu').is(":visible")) {
        $('.hide-menu').trigger('click');
        // $('.navbar-items-list > .call-us-navbar-item').removeClass('hide');
        // $('.show-menu').removeClass('hide');
      }
    }
  });

// hide menu navbar items when click on dropdown menu
  $(document).click(() => {
    if($('.header-navbar .dropdown-menu').is(":visible")) {
      $('.navbar-items-list > .call-us-navbar-item').hide();
      $('.show-menu').hide();
    } else {
      $('.navbar-items-list > .call-us-navbar-item').show();
      $('.show-menu').show();
    }
  })


// hide form no click outside the element
  $(document).click((event) => {
    if($(window).width() > 767) {
      if($('.form-container').height() > 41) {
        if(!$(event.target).closest('.form-container').length) {
          $('.form-container').removeClass('show-form-animation-class').addClass('hide-form-animation-class');
          $('.body-grey-background').hide();
          setTimeout(() => {
            $('.form-container').removeClass('hide-form-animation-class');
          }, 500);
        }
      }
    }
  });

// hide form no click outside the element on the small screen
  $(document).click((event) => {
    if($(window).width() < 767) {
      if($('.form-container-small-screen').height() > 53) {
        if(!$(event.target).closest('.form-container-small-screen').length) {
          $('.form-container-small-screen').removeClass('show-form-animation-class').addClass('hide-form-animation-class');
          $('.body-grey-background').hide();
          setTimeout(() => {
            $('.form-container-small-screen').removeClass('hide-form-animation-class');
          }, 500);
        }
      }
    }
  });

// show the main form
  $('button.make-viewing-appointment').click(() => {
    $('.form-container').addClass('show-form-animation-class').removeClass('hide-form-animation-class');
    $('.body-grey-background').show();
    let formOffset = $('.form-container').offset().top;
    // check window size to center popup properly
    if($(window).width() > 997) {
      $('html, body').animate({
        scrollTop: formOffset - 648
      }, 500);
    } else if(($(window).width() > 767)) {
      $('html, body').animate({
        scrollTop: formOffset - 618
      }, 500);
    }
  });

// main form on the small screen
  $('button.make-viewing-appointment-small-screen').click(() => {
    $('.form-container-small-screen').addClass('show-form-animation-class').removeClass('hide-form-animation-class');
    $('.body-grey-background').show();
    let formOffset1 = $('.form-container-small-screen').offset().top;
    $('html, body').animate({
      scrollTop: formOffset1 - 607
    }, 500);
  });


// hide the main form
  $('.dropdown-form-close').click(() => {
    $('.form-container').removeClass('show-form-animation-class').addClass('hide-form-animation-class');
    setTimeout(() => {
      $('.form-container').removeClass('hide-form-animation-class');
    }, 500);
    $('.body-grey-background').hide();
  });

  $('.dropdown-form-close').click(() => {
    $('.form-container-small-screen').removeClass('show-form-animation-class').addClass('hide-form-animation-class');
    setTimeout(() => {
      $('.form-container-small-screen').removeClass('hide-form-animation-class')
    }, 500);
    $('.body-grey-background').hide();
  });


// to highlight proper date in the form
  function checkPreferedDate(selector, className) {
    $(selector).click(function() {
      $(this).toggleClass(className);
    })
  }
  checkPreferedDate('.prefered-days-big-screen > span', 'prefered-days-check');
  checkPreferedDate('.prefered-days-small-screen > span', 'prefered-days-check');
  checkPreferedDate('.prefered-daytime > span', 'prefered-days-check');


  //animation on click of inputts in the main form

  $('.left-form-section > label').click(function() {
    $(this).animate({
      fontSize: 14
    }, 300)
  });


// to make work upper slider
  $('.arrows-container-next').click(() => {
    $('button.slick-next').trigger('click');
  })
  $('.arrows-container-prev').click(() => {
    $('button.slick-prev').trigger('click');
  })

  // show more appartment decrtiption on mobile screen
  $('.appartment-description-button').click(() => {
    if($(window).width() < 767) {
      $('.description-section').toggleClass('show-more');
      $('.main-paragraph-description').toggleClass('part');
    }
  })


/*

  $(window).scroll(() => {
    var scrollTop     = $(window).scrollTop(),
        elementOffset = $('.v-sign').offset().top,
        distance      = (elementOffset - scrollTop);
    if(distance == "5px") {
      alert(1);
    }
  });

*/
  });
