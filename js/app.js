    function htmlbodyHeightUpdate() {
    var height3 = $( window ).height()
    var height1 = $('.nav').height()+50
    var height2 = $('.main').height()
    if(height2 > height3){
      $('html').height(Math.max(height1,height3,height2)+10);
      $('body').height(Math.max(height1,height3,height2)+10);
    }
    else
    {
      $('html').height(Math.max(height1,height3,height2));
      $('body').height(Math.max(height1,height3,height2));
    }
    
  }
  $(document).ready(function () {
    htmlbodyHeightUpdate()
    $( window ).resize(function() {
      htmlbodyHeightUpdate()
    });
    $( window ).scroll(functionß(){
      height2 = $('.main').height()
        htmlbodyHeightUpdate()
    });
  });


var menu = $('.menu');
var barra_busqueda = $('.search_bar');
var bar = $('#bar');
var icono = $('.icon-search');

barra_busqueda.focusin(function(){
    barra_busqueda.css('width', '20%');
    menu.css('width', '80%');
    icono.css('color', '#000');
    bar.css('color', '#000');
});

barra_busqueda.focusout(function(){
    barra_busqueda.css('width', '15%');
    menu.css('width', '85%');
    icono.css('color', '#fff');
    bar.css('color', '#fff');
});
