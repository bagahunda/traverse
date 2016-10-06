(function ($) {

  function arrayToRGB ( array ) {
  return "rgb(" + array[0] + ", " + array[1] + ", " + array[2] + ")";
  }

  function processImages () {
    $('.hero__gradient').each(function () {
      var targetImageUrl = $(this).prev().css('background-image');
      var targetImageUrl1 = $(this).parent().next().find('.hero__gradient').prev().css('background-image');
      var targetImage = targetImageUrl.trim().substring(5, targetImageUrl.length - 2);

      if (targetImageUrl1 === undefined) {
        targetImage1 = '#ffffff';
      } else {
        var targetImage1 = targetImageUrl1.trim().substring(5, targetImageUrl1.length - 2);
      }

      var colorThief = new ColorThief();
      // var startColor = colorThief.getColor (targetImage);
      // var endColor = colorThief.getColot (targetImage1);
      console.log(targetImage + ',' + targetImage1);
    });
  }

  $(document).ready(function () {

    processImages();

  });

})(jQuery);
