// click-menu

$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 800);
    }

  });
});

<<<<<<< Updated upstream

$(".mabel_logo").hover(function(){
  $(this).addClass('animate__animated animate__headShake');
}, function() {
   $(this).removeClass('animate__animated animate__headShake');
});

=======
// document.oncontextmenu = new Function("return false");
//     oncontextmenu = "return false;"
>>>>>>> Stashed changes
