// main.js

// 본문1 슬라이드
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

// 본문1 슬라이드 텍스트 등장
$('.m1_text .on').show().animate({
  marginTop : '0',
  opacity : '1'
},1000);

$('.m1_slide').on('afterChange', function(event, slick, currentSlide) {
  $('.m1_txt_box').removeClass('on').hide().css({
    marginTop : '50px',
    opacity : '0'
  });
  $('.m1_txt_box').eq(currentSlide).addClass('on').show().animate({
    marginTop : '0',
    opacity : '1'
  },1000);
});

// 본문1 슬라이드 재생버튼
$('.m1_play').click(function(){
  $('.m1_slide').slick('slickPlay');
  $(this).hide();
  $('.m1_pause').show();
});

// 본문1 슬라이드 멈춤버튼
$('.m1_pause').click(function(){
  $('.m1_slide').slick('slickPause');
  $(this).hide();
  $('.m1_play').show();
});

// 본문2 이미지 슬라이드
$('.m2_slide').slick({
  arrows : false,
  
});