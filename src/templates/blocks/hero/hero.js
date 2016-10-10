(function ($) {

  var image = '';

  function randomHeroBg () {
    var images = ['hyhero1.jpg', 'hyhero2.jpg', 'hyhero3.jpg', 'hyhero4.jpg', 'hyhero5.jpg', 'hyhero6.jpg', 'hyhero7.jpg', 'hyhero8.jpg']

    var rand = Math.floor(Math.random() * 8);
    if (image === images[rand]) {
      rand = Math.floor(Math.random() * 8);
    }
    image = images[rand];

    $('.hero__bg').fadeOut(500);

    setTimeout(function(){
      $('.hero__bg').css({
        'background-image': 'url("assets/images/' + image + '")'

      });
    }, 500);

    $('.hero__bg').fadeIn(500);

  }

  $(document).ready(function () {
    setInterval(function() {
      randomHeroBg();
    }, 8000);

    $('select').niceSelect();

  });

})(jQuery);
