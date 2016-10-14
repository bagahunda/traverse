(function ($) {

  function setEqualHeight (parentClass, targetClass) {
    $('.'+parentClass).each(function () {
      var target = $('.'+targetClass, this);
      var maxHeight = Math.max.apply(Math, target.map(function () {
        return $(this).height();
      }).get());
      target.height(maxHeight);
    });

  }

  $(document).ready(function () {

    setEqualHeight('inner-container', 'feature__img');


    $('.bx-slider').bxSlider({
      mode: 'fade'
    });

  });

})(jQuery);
