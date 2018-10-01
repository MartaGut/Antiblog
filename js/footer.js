
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('.plane').fadeIn(); 
        } else { 
            $('.plane').fadeOut(); 
        } 
    }); 
    $('.plane').click(function(){ 
        $('html, body').animate({ scrollTop: 0 }, 800); 
        return false; 
    }); 
});

// slide index is the position of the picture in the array of pictures
var slideIndex = 1;
// show the first image by default when loading the page
showWises(slideIndex);

var wises;

 //var myTimer = null;
 var myTimer = setTimeout(plusWises(1), 0);

function plusWises(n) {
    clearInterval(myTimer);
    this.showWises(slideIndex += n);
    if (n = -1){
        myTimer = setInterval(() => {this.plusWises(n+2);}, 7000);
    } else {
        myTimer = setInterval(() => {this.plusWises(n+1);}, 7000);
    }
 }

    function showWises(n) {
  var i;
  var wises = document.getElementsByClassName("wisdom fade");
  if (n > wises.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = wises.length}
  for (i = 0; i < wises.length; i++) {
      wises[i].style.display = "none"; 
  }
  wises[slideIndex-1].style.display = "block";
}


    function mount() {
        this.showWises(slideIndex);
        myTimer = setInterval(() => {this.plusWises(1);}, 7000);
    }