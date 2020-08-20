$(document).ready(function () {
  var previousScroll = 0;
  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll < 100) {
      showNav();
    } else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
      if (currentScroll > previousScroll) {
        hideNav();
      } else {
        showNav();
      }
      previousScroll = currentScroll;
    }
  });

  function hideNav() {
    $(".navbar").removeClass("is-visible").addClass("is-hidden");
    $("#header-bg").removeClass("is-visible").addClass("is-hidden");
  }

  function showNav() {
    $(".navbar").removeClass("is-hidden").addClass("is-visible").addClass("scrolling");
    $("#header-bg").removeClass("is-hidden").addClass("is-visible").addClass("scrolling");
  }
});
