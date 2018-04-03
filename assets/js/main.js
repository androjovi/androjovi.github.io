$(document).ready(function(){
  alert('Sorry, the website is under construction');
   $('.slider').slider({
     indicators : false,
   });
   var scroll = $(window).scrollTop();

  if (scroll >= 500){
    $("#ss").show("nav")
    $(".nav-extended").addClass("dark-nav");
	  $(".nav-extended").removeClass("s");
  }else{
    $(".nav-extended").removeClass("dark-nav");
	  $(".nav-extended").addClass("s");
  }

  var bar = new ProgressBar.Line(container, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '50%', height: '100%'},
  text: '',
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Line(php, {
strokeWidth: 4,
easing: 'easeInOut',
duration: 1400,
color: '#FFEA82',
trailColor: '#eee',
trailWidth: 1,
svgStyle: {width: '50%', height: '100%'},
text: '',
from: {color: '#FFEA82'},
to: {color: '#ED6A5A'},
step: (state, bar) => {
  bar.setText(Math.round(bar.value() * 100) + ' %');
}
});

bar.animate(1.0);  // Number from 0.0 to 1.0


var bar = new ProgressBar.Line(css, {
strokeWidth: 4,
easing: 'easeInOut',
duration: 1400,
color: '#FFEA82',
trailColor: '#eee',
trailWidth: 1,
svgStyle: {width: '50%', height: '100%'},
text: '',
from: {color: '#FEEA82'},
to: {color: '#ED6A5A'},
step: (state, bar) => {
  bar.setText(Math.round(bar.value() * 100) + ' %');
}
});

bar.animate(1.0);  // Number from 0.0 to 1.0
});
