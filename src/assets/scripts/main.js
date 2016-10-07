(function ($) {


  $(document).ready(function () {

    $('.modal .flex img').on('click', function() {
      if ($(this).hasClass('modal-enlarge')) {
        $(this).removeClass('modal-enlarge');
        $(this).on('transitionend webkitTransitionEnd oTransitionEnd', function () {
          console.log($(window).width() - ($(this).width() + $(this).offset().left));
          $(this).parents('.bx-viewport').css({
            'overflow': 'hidden'
          })
        });
      } else {
        $(this).addClass('modal-enlarge');
        $(this).parents('.bx-viewport').css({
          'overflow': 'visible'
        });
        $(this).on('transitionend webkitTransitionEnd oTransitionEnd', function () {
          console.log($(window).width() - ($(this).width() + $(this).offset().left));
          $(this).parents('.bx-viewport').css({
            'overflow': 'visible'
          })
        });
      }
    });

  });

})(jQuery);
