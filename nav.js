
var yourNavigation = $("#navbar");
stickyDiv = "sticky";
yourHeader = $('.banner').height();

$(window).scroll(function() {
if( $(this).scrollTop() > yourHeader ) {
yourNavigation.addClass(stickyDiv);
} else {
yourNavigation.removeClass(stickyDiv);
}
});

/* window.onscroll = function() {myFunction()};


var navbar = document.getElementById("navbar");


var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} */