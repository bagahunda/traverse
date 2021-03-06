(function ($) {


  $(document).ready(function () {

    //Intercom Initialization Starts
    window.Intercom("boot", {
      app_id: "opa5usiw"
    });
    //Intercom Initialization Ends

    $('.modal .flex img').on('click', function() {

      var winWidth = $(window).width();
      var winHeight = $(window).height();
      var w = $(this).width();
      var h = $(this).height();
      var xOffset = $(this).offset().left;
      var yOffset = $(this).offset().top;

      var zoom = ("<div class='zoom-img'></div>");

      if (winWidth > 600) {
        if ($('.zoom-img').length > 0) {
          $('.zoom-img').removeClass('zoom-img--visible').remove();
        }
        $(this).parents('.modal__content').append(zoom);
        $('.zoom-img').css({
          'width': w * 2,
          'height': h * 2
        });
        $('.zoom-img').addClass('zoom-img--visible').css({
          'background': 'url("' + $(this).attr('src') + '") no-repeat',
          'background-size': 'cover'
        });
      } else {
        return false;
      }
    });

    $('body').on('click', '.zoom-img', function () {
      $(this).removeClass('zoom-img--visible');
      $(this).remove();
    });

    $('.js-show-modal').on('click', function (e) {

      e.preventDefault();

      $('.modal').removeClass('modal--visible');

      var target = $(this).data('modal');
      var winWithoutModal = $(window).width();

      $('body').addClass('modal-shown');

      var winWithModal = $(window).width();

      var scrollBarSize = winWithModal - winWithoutModal

      $('#' + target).addClass('modal--visible');

      $('div.header').css(
        'padding-right', "+=" + scrollBarSize
      );

      $('body, div.intercom-messenger-frame').css({
        'margin-right': scrollBarSize
      });

      $('#intercom-container').contents().find('iframe.intercom-launcher-frame','div.intercom-messenger-frame').css(
        'margin-right', "+=" + scrollBarSize
      );

    });

    $('.js-close-modal').on('click', function (e) {

      e.preventDefault();

      if ($('.demo-form').length > 0) {
        $(".demo-form").trigger('reset');
      }

      $(this).parents('.modal').removeClass('modal--visible');
      setTimeout(function(){
        $('body, div.intercom-messenger-frame').removeClass('modal-shown').removeAttr('style');
        $('div.header').removeAttr('style');
        $('#intercom-container').contents().find('iframe.intercom-launcher-frame').removeAttr('style');
      },300);

    });

    $('.modal--with-overlay').on('click', function (e) {

      var target = e.target.className;
      if (target === 'modal modal modal--with-overlay modal--visible') {
        if ($('.demo-form').length > 0) {
          $(".demo-form").trigger('reset');
        }
        $('.modal').removeClass('modal--visible');
        setTimeout(function(){
          $('body, div.intercom-messenger-frame').removeClass('modal-shown').removeAttr('style');
          $('div.header').removeAttr('style');
          $('#intercom-container').contents().find('iframe.intercom-launcher-frame').removeAttr('style');
        },300);
      }
    })

    $('.js-top').on('click', function (e) {

      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    })

  });

})(jQuery);
