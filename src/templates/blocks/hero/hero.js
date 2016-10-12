(function ($) {

  var image = '';
  var images = ['hyhero1.jpg', 'hyhero2.jpg', 'hyhero3.jpg', 'hyhero4.jpg', 'hyhero5.jpg', 'hyhero6.jpg', 'hyhero7.jpg', 'hyhero8.jpg']


  function randomHeroBg () {
    var i = 1;
    return function setBg() {
      $('.hero__bg').fadeOut(1000, function() {
        $(this).css({
          'background-image': 'url("assets/images/' + images[i] + '")'
        }).fadeIn(1000);
      });
      i++;
      if (i === 8) {
        i = 1;
      }
    }
    // var rand = Math.floor(Math.random() * 8);
    // if (image === images[rand]) {
    //   rand = Math.floor(Math.random() * 8);
    // }
    // image = images[rand];

    //   $('.hero__bg').fadeOut(500);
    //   setTimeout(function (images){
    //     $('.hero__bg').css({
    //       'background-image': 'url("assets/images/' + images[i] + '")'
    //     });
    //   }, 500);
    //   $('.hero__bg').fadeIn(500);

  }

  var randomHeroBg = randomHeroBg();
  $(document).ready(function () {
    setInterval(function() {
      randomHeroBg();
    }, 8000);

    $('select').select2();

  });

})(jQuery);
