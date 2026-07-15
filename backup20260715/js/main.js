$(document).ready(function() {
  $('.scrollspy').scrollSpy();


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      $("nav").addClass("dark-nav");
      $(".navbar-fixed").removeClass("mt-20");
      $("nav").removeClass("transparent");
    } else {
      $("nav").removeClass("dark-nav");
      $(".navbar-fixed").addClass("mt-20");
      $("nav").addClass("transparent");
    }
  })

});
