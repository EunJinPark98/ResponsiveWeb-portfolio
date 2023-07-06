// main.js

// 본문 1 슬라이드
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

$('.m1_pause').click(function(){
  $(this).toggle();
  $(this).siblings('.m1_play').show();
});
$('.m1_play').click(function(){
  $(this).toggle();
  $(this).siblings('.m1_pause').show();
});