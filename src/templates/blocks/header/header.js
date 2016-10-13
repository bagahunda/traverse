(function($) {

  $(document).ready(function () {

    // Smooth scroll to anchor
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 75
          }, 1000);
          if ($('.main-nav').hasClass('nav--is-shown')) {
            $('.nav--is-shown').removeClass('nav--is-shown');
            $('.cover').fadeOut();
          }
          return false;
        }
      }
    });

    //Show and hide mobile nav
    $('.js-mobile-menu').on('click', function (e) {
      e.preventDefault();
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

    // Get started form
    $('.get-started-form').on('submit', function(e) {
      e.preventDefault();
      $(this).find('.btn').addClass('loading');
      setTimeout(function() {
        $('.btn.loading').removeClass('loading');
      }, 2000);
    });

  });

}(jQuery));
