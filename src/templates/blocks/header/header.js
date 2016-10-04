(function($) {

  $(document).ready(function () {

    $('.js-mobile-menu').on('click', function (e) {
      var target = $('.main-nav');
      var cover = $('.cover')
      if (target.hasClass('nav--is-shown')) {
        target.removeClass('nav--is-shown');
        cover.fadeOut();
      } else {
        target.addClass('nav--is-shown');
        cover.fadeIn();
      }
    });

    $('.cover').on('click', function () {
      $('.main-nav').removeClass('nav--is-shown')
      $(this).fadeOut();
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
