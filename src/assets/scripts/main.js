(function ($) {


  $(document).ready(function () {

    //Intercom Initialization Starts
    window.Intercom("boot", {
      app_id: "opa5usiw"
    });
    //Intercom Initialization Ends

    $('.modal .flex img').on('click', function() {
      if ($(this).hasClass('modal-enlarge')) {
        $(this).removeClass('modal-enlarge');
        $(this).on('transitionend webkitTransitionEnd oTransitionEnd', function () {
          $(this).parents('.bx-viewport').css({
            'overflow': 'hidden'
          })
        });
      } else {
        $('.modal-enlarge').removeClass('modal-enlarge');
        $(this).addClass('modal-enlarge');
        $(this).parents('.bx-viewport').css({
          'overflow': 'visible'
        });
        $(this).on('transitionend webkitTransitionEnd oTransitionEnd', function () {
          $(this).parents('.bx-viewport').css({
            'overflow': 'visible'
          })
        });
      }
    });

    $('.js-show-modal').on('click', function (e) {

      e.preventDefault();

      $('.modal').removeClass('modal--visible');

      var target = $(this).data('modal');
      var winWithoutModal = $(window).width();

      $('body').addClass('modal-shown');

      var winWithModal = $(window).width();

      var scrollBarSize = winWithModal - winWithoutModal

      $('#' + target).addClass('modal--visible');

      $('div.header').css(
        'padding-right', "+=" + scrollBarSize
      );

      $('body, div.intercom-messenger-frame').css({
        'margin-right': scrollBarSize
      });

      $('#intercom-container').contents().find('iframe.intercom-launcher-frame','div.intercom-messenger-frame').css(
        'margin-right', "+=" + scrollBarSize
      );

    });

    $('.js-close-modal').on('click', function (e) {

      e.preventDefault();

      if ($('.demo-form').length > 0) {
        $(".demo-form").trigger('reset');
      }

      $(this).parents('.modal').removeClass('modal--visible');
      setTimeout(function(){
        $('body, div.intercom-messenger-frame').removeClass('modal-shown').removeAttr('style');
        $('div.header').removeAttr('style');
        $('#intercom-container').contents().find('iframe.intercom-launcher-frame').removeAttr('style');
      },300);

    });

    $('.js-top').on('click', function (e) {

      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    })

  });

})(jQuery);
