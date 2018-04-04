$(document).ready(function() {
  console.log("Hai kamu, iya kamu");
  var teks_out = prompt("Can you tell me your name, please, just quick name");
  teks_out = teks_out.toUpperCase()
  if (teks_out.length <= 8) {
    if (teks_out) {
      hacil = teks_out
    } else {
      hacil = "THERE"
    }
  } else {
    hacil = "THERE"
    console.log("Sorry namanya kepanjangan");
  }
  $('.slider').slider({
    indicators: false,
  });
  $("#date").text(Date());
  var typed = new Typed('.element', {
    strings: ["<h3>Aloha human!</h3><h5 class='light grey-text text-lighten-3 element'>The coolest front-end developer</h5>"],
    typeSpeed: 40,
    fadeOut: true,
    cursorChar: '',
  });

  var typed = new Typed('.there', {
    strings: [hacil],
    typeSpeed: 40,
    startDelay: 3000,
    cursorChar: '_',
    backSpeed: 0,
  });

});
