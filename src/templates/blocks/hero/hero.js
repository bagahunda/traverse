(function ($) {

  var image = '';
  var images = ['hyhero1.jpg', 'hyhero2.jpg', 'hyhero3.jpg', 'hyhero4.jpg', 'hyhero5.jpg', 'hyhero6.jpg', 'hyhero7.jpg']


  function randomHeroBg () {

    for (var i = 0; i < images.length; i++) {
      var bgItem = '<div class="hero-bg__item-' + i + '"></div>';
      $('.hero__bg').append(bgItem);
      $('.hero-bg__item-' + i).css({
        'background-image': 'url("assets/images/' + images[i] + '")'
      });
    }

    return function setBg() {
      $(".hero__bg div").first().appendTo('.hero__bg').fadeOut(1500);
      $(".hero__bg div").first().fadeIn(1500);
      setTimeout(setBg, 7000);

      // $('.hero__bg').fadeOut(1000, function() {
      //   $(this).css({
      //     'background-image': 'url("assets/images/' + images[i] + '")'
      //   }).fadeIn(1000);
      // });
      // i++;
      // if (i === 7) {
      //   i = 0;
      // }
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
    // setInterval(function() {
    //   randomHeroBg();
    // }, 7000);

    randomHeroBg();

    $('select').select2();

  });

})(jQuery);
