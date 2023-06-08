$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
   $('.slider').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 1000,
      easing: 'linear',
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnFocus: true,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      draggable: true,
      swipe: true,
      touchThreshold: 5,
      touchMove: true,
      waitForAnimate: false,
      centerMode: true,
      variableWidth: true,
   });
});


