$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});



//wpp btn
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
      $('.btn__wpp').fadeIn();
  } else {
      $('.btn__wpp').fadeOut();
  }
});
