(function ($) {

  function arrayToRGB ( array ) {
  return "rgb(" + array[0] + ", " + array[1] + ", " + array[2] + ")";
  }

  function processImages () {
    var targetImages = $('.hero__gradient img')
    targetImages.each(function (index) {
      var targetImage = targetImages [index];
      var targetImage1 = targetImages [index + 1];

      if (targetImage1 === undefined) {
        targetImage1 = '#ffffff';
      }

      var colorThief = new ColorThief();
      var startColor = colorThief.getColor (targetImage);
      var endColor = colorThief.getColot (targetImage);
      console.log(startColor + ',' + endColor);
    });
  }

  $(document).ready(function () {

    processImages();

  });

})(jQuery);
