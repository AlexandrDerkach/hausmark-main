 /*MAIN NAVBAR TOOGLE*/
 $(document).ready(function () {
     var touch = $("#touch-menu");
     var menu = $(".navbar");
     var langpanel = $(".lang-panel");
     var toppanel = $(".top-panel");
     $(touch).on('click', function (e) {
         e.preventDefault();
         menu.slideToggle(0);
         langpanel.slideToggle(0);
         toppanel.slideToggle(0, function () {
             toppanel.toggleClass('top-panel-highter');
             $(this).toggleClass('expand').css('display', '');
         })
     })
     $(window).resize(function () {
         var wid = $(window).width();
         if (wid >= 830 && menu.is(':hidden')) {
             menu.removeAttr('style');
         }
         if (wid >= 830 && langpanel.is(':hidden')) {
             langpanel.removeAttr('style');
         }
     })
 })
 jQuery(document).ready(function () {
     $('.one-time').slick({
         dots: true
         , infinite: true
         , speed: 600
         , slidesToShow: 1
         , adaptiveHeight: true
     });
 });