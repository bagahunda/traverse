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

  var slider = '';

  $(document).ready(function () {

    setEqualHeight('inner-container', 'feature__img');
    var winWidth = $(window).width();

    if (winWidth < 600) {
      var slider = $('.js-bx-slider').bxSlider({});
    } else if (winWidth > 600) {
      if (slider) {
        console.log(slider);
        $('.js-bx-slider').destroySlider();
      }
    }


    $(window).on('resize', function () {
      var winWidth = $(window).width();
      if (winWidth === 599) {
        slider = $('.js-bx-slider').bxSlider({});
      } else if (winWidth === 601) {
        if (slider != '') {
          slider.destroySlider();
        }

        // slider.each(function () {
        //   $(this).destroySlider();
        // })
      }
    });

  });

})(jQuery);
