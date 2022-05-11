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

document.oncontextmenu = new Function("return false");
    oncontextmenu = "return false;"
