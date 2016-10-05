(function ($) {

  function randomHeroBg () {
    var images = ['hyhero1.jpg', 'hyhero2.jpg', 'hyhero3.jpg', 'hyhero4.jpg', 'hyhero5.jpg', 'hyhero6.jpg', 'hyhero7.jpg', 'hyhero8.jpg', 'hyhero9.jpg']

    var rand = Math.floor(Math.random() * 9);
    var image = images[rand];

    $('.hero').css({
      'background': 'url("assets/images/' + image + '") center center no-repeat'
    });

  }

  $(document).ready(function () {
    console.log("hero");
    setInterval(function() {
      randomHeroBg();
    }, 7000);

  });

})(jQuery);
