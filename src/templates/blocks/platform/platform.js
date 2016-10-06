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


    // $(window).on('resize', function () {
    //   var winWidth = $(window).width();
    //   if (winWidth === 499) {
    //     $('.js-bx-slider').bxSlider({});
    //   } else if (winWidth === 501) {
    //     $('.js-bx-slider').destroySlider();
    //   }
    // });

  });

})(jQuery);
