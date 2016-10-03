(function($) {

  $(document).ready(function () {

    $('.js-mobile-menu').on('click', function (e) {
      var target = $('.main-nav');
      if (target.hasClass('nav--is-shown')) {
        target.removeClass('nav--is-shown');
      } else {
        target.addClass('nav--is-shown');
      }
    });

    // $('.js-show-submenu').on('click', function () {
    //   var winWidth = $(window).width();
    //   var submenu = $(this).find('.main-nav__submenu');
    //   if (winWidth >= 940) {
    //     return false
    //   } else {
    //     if (submenu.is(':visible')) {
    //       submenu.slideUp();
    //     } else {
    //         submenu.slideDown('');
    //     }
    //   }
    // });

  });

}(jQuery));
