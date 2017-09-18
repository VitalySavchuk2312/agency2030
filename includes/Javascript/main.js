function scrollHandler() {
  var docTop     = $(document).scrollTop();
  var headHeight = $(".header-title-container").height();
  
  if ( docTop > headHeight ) {
    
    $(".scroll-button-fixed").addClass("normal-view");
    $(".scroll-button-fixed").removeClass("folded-view");

    
    setTimeout(function() {
      if ( $(".scroll-button-fixed").css("height") != "1px" ) {

         $(".scroll-button-fixed").css("transform", "rotate(180deg)");
         $(".scroll-button-fixed").css("transition", "1s");


         $(".scroll-button").css("transform", "rotate(180deg)");
         $(".scroll-button").css("transition", "1s");

      }
    }, 20);

    $(".scroll-button").hide();
  }
  else {
    
    $(".scroll-button-fixed").removeClass("normal-view");
    $(".scroll-button-fixed").addClass("folded-view");

    $(".scroll-button-fixed").css("transform", "none");
    $(".scroll-button-fixed").css("transition", "0s");

    $(".scroll-button").show();
    setTimeout(function() {
      $(".scroll-button").css("transform", "none");
      $(".scroll-button").css("transition", "0.4s");
    }, 20);

  }
}

function showThankyou () {
  var container = ".form-container";
  if ( $(".form-container-small-screen").height() > 41
      && $(".form-container-small-screen").is(":visible") ) {
      container = ".form-container-small-screen";
  }

  $(container + " .left-form-section").hide();
  $(container + " .right-form-section").hide();
  $(container + " .required-title").hide();
  $(container + " .form-submit").hide();

  $(container + " H3").text("Thank you! We will contact you as soon as possible.");



  setTimeout(function() {
    $(container + " .dropdown-form-close").trigger("click");

    $(container + " .left-form-section").show();
    $(container + " .right-form-section").show();
    $(container + " .required-title").show();
    $(container + " .form-submit").show();
    $(container + " H3").text("PLAN A VIEWING");
  }, 3000);
}

function sendAjaxPost() {
  var container = ".form-container";
  if ( $(".form-container-small-screen").height() > 41
      && $(".form-container-small-screen").is(":visible") ) {
      container = ".form-container-small-screen";
  }

  var userName    = $(container + " input[name='name']").val();
  var userMobile  = $(container + " input[name='mobile']").val();
  var userEmail   = $(container + " input[name='email']").val();
  var userMessage = $(container + " textarea[name='message']").val();
  var userPrefDays = $(container + " input[name='preffered_days']").val();
  var userPrefDayTime = $(container + " input[name='preffered_daytime']").val();
  var propertyName = $(container + " input[name='property_name']").val();
  var propertyId = $(container + " input[name='property_id']").val();

  var formAction  = $(container + " form").attr("action");

  var postParams = {
    name: userName,
    mobile: userMobile,
    email: userEmail,
    message: userMessage,
    preffered_days: userPrefDays,
    preffered_daytime: userPrefDayTime,
    property_name: propertyName,
    property_id: propertyId
  };

  $.post( formAction, postParams, function( data ) { } );
  showThankyou();
}

function checkPreferedDate(selector, className) {
  $(selector).click(function() {
    $(this).toggleClass(className);
    if($(this).hasClass(className)) {
      $(this).css({
        'font-weight': 'bold',
        'font-size': '16px'
      });
    } else {
      $(this).css({
        'font-weight': 'normal',
        'font-size': '14px'
      })
    }
  });
}

function checkPreferredDays() {
  var prefDays = "";
  var isFirst = true;

  var containerElem = ".prefered-days-big-screen";
  if ( $(".form-container-small-screen").height() > 41
      && $(".form-container-small-screen").is(":visible") ) {
        containerElem = ".prefered-days-small-screen";
  }

  $( containerElem +" SPAN.prefered-days-check" ).each(function() {

    if ( isFirst ) {
      prefDays += $(this).text();
      isFirst = false;
    }
    else {
      prefDays += ", " + $(this).text();
    }

  });


  return prefDays;
}

function checkPreferredDaytime() {
  var prefDaytime = "";
  var isFirst = true;

  $(".prefered-daytime  SPAN.prefered-days-check").each(function () {

    if ( isFirst ) {
      prefDaytime += $(this).text();
      isFirst = false;
    }
    else {
      prefDaytime += ", " + $(this).text();
    }

  });

  return prefDaytime;
}


$(document).ready(function() {

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
  $(document).click(function() {
    if($('.header-navbar .dropdown-menu').is(":visible")) {
      $('.navbar-items-list > .call-us-navbar-item').hide();
      $('.show-menu').hide();
    } else {
      $('.navbar-items-list > .call-us-navbar-item').show();
      $('.show-menu').show();
    }
  });


// hide form no click outside the element
  $(document).click(function(event) {
    if($(window).width() > 767) {
      if($('.form-container').height() > 41) {
        if(!$(event.target).closest('.form-container').length) {
          $('.form-container').removeClass('show-form-animation-class').addClass('hide-form-animation-class');
          $('.body-grey-background').hide();
          setTimeout(function() {
            $('.form-container').removeClass('hide-form-animation-class');
          }, 500);
        }
      }
    }
  });

// hide form no click outside the element on the small screen
  $(document).click(function(event) {
    if($(window).width() < 767) {
      if($('.form-container-small-screen').height() > 53) {
        if(!$(event.target).closest('.form-container-small-screen').length) {
          $('.form-container-small-screen').removeClass('show-form-animation-class').addClass('hide-form-animation-class');
          $('.body-grey-background').hide();

          setTimeout(function() {
            $('.form-container-small-screen').removeClass('hide-form-animation-class');
          }, 500);
        }
      }
    }
  });

// show the main form
  $('button.make-viewing-appointment').click(function() {
    var formHeight = $('.form-container');

    formHeight.addClass('show-form-animation-class').removeClass('hide-form-animation-class');
    $('.body-grey-background').show();
    var formOffset = formHeight.offset().top;
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
  $('button.make-viewing-appointment-small-screen').click(function() {
    $('.form-container-small-screen').addClass('show-form-animation-class').removeClass('hide-form-animation-class');
    $('.body-grey-background').show();
    var formOffset1 = $('.form-container-small-screen').offset().top;
    $('html, body').animate({
      scrollTop: formOffset1 - 607
    }, 500);
  });


// hide the main form
  $('.dropdown-form-close').click(function() {
    $('.form-container').removeClass('show-form-animation-class').addClass('hide-form-animation-class');
    setTimeout(function() {
      $('.form-container').removeClass('hide-form-animation-class');
    }, 500);
    $('.body-grey-background').hide();
  });

  $('.dropdown-form-close').click(function() {
    $('.form-container-small-screen').removeClass('show-form-animation-class').addClass('hide-form-animation-class');
    setTimeout(function() {
      $('.form-container-small-screen').removeClass('hide-form-animation-class')
    }, 500);
    $('.body-grey-background').hide();
  });

/*
  var array = [1, 2, 3, 4, 5];
  var checkedArr = array.filter(function(item) {
    return array[item] > 2;
  });
  console.log(checkedArr);
*/

// to highlight proper date in the form

  checkPreferedDate('.prefered-days-big-screen > span', 'prefered-days-check');
  checkPreferedDate('.prefered-days-small-screen > span', 'prefered-days-check');
  checkPreferedDate('.prefered-daytime > span', 'prefered-days-check');


  $('.make-viewing-form').submit(function() {
    var prefDays = checkPreferredDays();
    var prefDaytime = checkPreferredDaytime();

    $('.make-viewing-form input[name="preffered_days"]').val( prefDays );
    $('.make-viewing-form input[name="preffered_daytime"]').val( prefDaytime );

		$('.make-viewing-form input[name="property_name"]').val( $(".apartment-description H3").text() );
		$('.make-viewing-form input[name="property_id"]').val( $(".active-property-item").children(".apartment-choice-hover-background").attr("data-id") );
  
    if ( $(this).valid() ) {
      sendAjaxPost();
    }

    return false;
  });


  //animation on click of inputts in the main form

  $('.left-form-section > label').click(function() {
    $(this).animate({
      fontSize: 14
    }, 300)
  });


  // to make work upper slider
  $('.arrows-container-next').click(function() {
    $('button.slick-next').trigger('click');
  });
  $('.arrows-container-prev').click(function() {
    $('button.slick-prev').trigger('click');
  });

  //show more apartment decrtiption on mobile screen
  $('.apartment-description-button').click(function() {
    if($(window).width() < 767) {
      $('.description-section').toggleClass('show-more');
        //part - class to remove opacity
      $('.main-paragraph-description').toggleClass('part');
      if($('.description-section').hasClass('show-more')) {
        $('.apartment-description-button').html('LESS');
      } else {
        $('.apartment-description-button').html('MORE');
      }
    }
  });

  
  $(document).scroll(function() {
    scrollHandler();
  });
  

  $('.scroll-button').click(function() {

      $('body').animate({
        scrollTop: $(".header-title-container").height() + 33
      }, 1000);

  });

  $('.scroll-button-fixed').click(function() {

      $('body').animate({
        scrollTop: 0
      }, 1000);

  });
  
  // form validation
  $('.make-viewing-form-small').validate();
  $('.make-viewing-form-big').validate();

  // to make form textarea responsive to text
  autosize($('.form-textarea'));


});
