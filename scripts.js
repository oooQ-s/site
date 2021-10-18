$(document).ready(function(){
    $(".slider").slick({
        dots: true,
        infinite: true,
        // variableWidth: true,
        // slidestoshow: 1
      });
  });

$(function(){
    $('.header__slider').slick({
        autoplay: true,
        arrows: false,
        dots: true, 
        responsive: [ //адаптивность
            {
              breakpoint: 551, //на 551 исчезают дотсы
              settings: {
                dots: false, 
              }
            }
          ],
    });
    });