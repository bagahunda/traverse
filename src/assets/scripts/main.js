(function ($) {

  function arrayToRGB ( array ) {
  return "rgb(" + array[0] + ", " + array[1] + ", " + array[2] + ")";
  }

  function processImages () {
    var targetImages = $('.hero__gradient img')
    targetImages.each(function (index) {
      var targetImage = targetImages [index];
      var targetImage1 = targetImages [index + 1];



      var colorThief = new ColorThief();
      var startColor = colorThief.getColor (targetImage);
      if (targetImage1 === undefined) {
        var endColor = [250, 250, 250];
      } else {
        var endColor = colorThief.getColor (targetImage1);
      }
      console.log($(this).parent());
      $(this).parent().css({
        'background': 'linear-gradient(to bottom, ' + arrayToRGB(startColor) + ', ' + arrayToRGB(endColor) + ')'
      })

    });
  }

  $(document).ready(function () {

    processImages();

  });

})(jQuery);
