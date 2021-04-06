$(document).ready(function(){
   $('.header__burger').click(function(event){
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   })
   $(".small-img").click(function() {
      $(".big-img").attr("src", $(this).attr("src"));
      $(this).addClass("active");
      
   });
   $('.news__column__images').niceScroll({
      emulatetouch: true,
      horizrailenabled: true,
      cursorwidth: 4,
      cursoropacitymin: 1,
      enablemousewheel: true,
      sensitiverail: true,
      background: '#999',
      cursorcolor: '#FA9A0E',
      cursorborder: 'none',
      cursorborderradius: 5,
      autohidemode: true,
      railvalign: 'left',
   });
})
