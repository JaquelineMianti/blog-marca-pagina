$(function () {


    //HEADER
  $(window).scroll(function () {
      if($(this).scrollTop() > 200){
        if (!$('.main_header').hasClass('fixed')){
          $('.main_header').stop().addClass('fixed')
          .css('top', '-100px').animate({'top': '0px'}, 500);}
            }
            else{
              $('.main_header').removeClass('fixed');
            }
  });
  });

//Menu

(function($) {
$.fn.menumaker = function(options) {  
 var menuDropdown = $(this), settings = $.extend({
   format: "dropdown",
   sticky: false
 }, options);
 return this.each(function() {
   $(this).find(".button").on('click', function(){
     $(this).toggleClass('menu-opened');
     var mainmenu = $(this).next('ul');
     if (mainmenu.hasClass('open')) { 
       mainmenu.slideToggle().removeClass('open');
     }
     else {
       mainmenu.slideToggle().addClass('open');
       if (settings.format === "dropdown") {
         mainmenu.find('ul').show();
       }
     }
   });
   menuDropdown.find('li ul').parent().addClass('has-sub');
multiTg = function() {
     menuDropdown.find(".has-sub").prepend('<span class="submenu-button"></span>');
     menuDropdown.find('.submenu-button').on('click', function() {
       $(this).toggleClass('submenu-opened');
       if ($(this).siblings('ul').hasClass('open')) {
         $(this).siblings('ul').removeClass('open').slideToggle();
       }
       else {
         $(this).siblings('ul').addClass('open').slideToggle();
       }
     });
   };
   if (settings.format === 'multitoggle') multiTg();
   else menuDropdown.addClass('dropdown');
   if (settings.sticky === true) menuDropdown.css('position', 'fixed');
resizeFix = function() {
  var mediasize = 960;
     if ($( window ).width() > mediasize) {
       menuDropdown.find('ul').show();
     }
     if ($(window).width() <= mediasize) {
       menuDropdown.find('ul').hide().removeClass('open');
     }
   };
   resizeFix();
   return $(window).on('resize', resizeFix);
 });
  };
})(jQuery);

(function($){
$(document).ready(function(){
$("#menu-dropdown").menumaker({
   format: "multitoggle"
});
});
})(jQuery);


// minhas alterações

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;


function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});




function leiaMais(){
  var pontos = document.getElementById("pontos");
  var maisTexto = document.getElementById("mais");
  var btnLeiaMais = document.getElementById("btnLeiaMais");

  if(pontos.style.display === "none"){
      pontos.style.display = "inline";
      maisTexto.style.display = "none";
      btnLeiaMais.innerHTML = "Leia Mais";
  }else{
      pontos.style.display = "none";
      maisTexto.style.display = "inline";
      btnLeiaMais.innerHTML = "Leia Menos";
  }
}