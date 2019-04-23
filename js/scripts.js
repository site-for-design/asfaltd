 $(window).scroll(function () {
   if ($(this).scrollTop() > 100) {
     $('#header').addClass('white-header');
   }
   else{
     $('#header').removeClass('white-header');
   }
 });

$('.header-menu ul li').on('click', function(){
  $(this).children(".header-submenu").slideToggle("slow");
  $(this).children(".header-submenu").toggleClass('header-submenu_active');
  $(this).children(".header-submenu").addClass('header-submenu_active');
});

 $('.thanks-slider').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   arrows: true,
   prevArrow: '<img class="thanks-prevArrow" src="img/thanks/slider-arrow.png"/>',
   nextArrow: '<img class="thanks-nextArrow" src="img/thanks/slider-arrow.png"/>',
   responsive: [
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
 });

$('.price-btn').on('click', function(){
  $(".price-wrap .hidden-column").slideToggle("slow");
});
// popup img
$(document).ready(function() {
  $('.slick-track').magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    }
  });
});
$(document).ready(function() {
  $('#awards-section .img-wrap').magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    }
  });
});
$(document).ready(function() {
  $('.awards-wrap__item').magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    }
  });
});