$(document).ready(() => {
  $('.image-container').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.items-section-container'
  });

  $('.items-section-container').slick({
   slidesToShow: 3,
   slidesToScroll: 3,
   asNavFor: '.image-container',
   centerMode: true,
   focusOnSelect: true
  });
})
