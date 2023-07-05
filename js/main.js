// main.js

$('.m1_slide').slick({
    dots : true,
    appendDots : '.ms_pager',
    customPaging : function(slider, i){
      return i+1 + ' · ' + slider.slideCount;
    },
    prevArrow : '.m1_prev',
    nextArrow : '.m1_next',
    autoplay : true,
    atoplaySpeed : 500,
    speed : 1000,
});