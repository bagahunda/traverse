(function ($) {


  $(document).ready(function () {

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

      var target = $(this).data('modal');
      var winWithoutModal = $(window).width();

      $('body').addClass('modal-shown');

      var winWithModal = $(window).width();

      var scrollBarSize = winWithModal - winWithoutModal

      $('#' + target).addClass('modal--visible');

      $('body').css({
        'margin-right': scrollBarSize
      });

      $('div.header').css(
        'padding-right', "+=" + scrollBarSize
      );

    });

    $('.js-close-modal').on('click', function (e) {

      e.preventDefault();

      $(this).parent('.modal').removeClass('modal--visible');
      setTimeout(function(){
        $('body').removeClass('modal-shown').removeAttr('style');
        $('div.header').removeAttr('style');
      },300);

    });

  });

})(jQuery);
