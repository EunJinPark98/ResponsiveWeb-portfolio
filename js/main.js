// main.js

// 브라우저 스크롤 이벤트 
$(window).scroll(function(){
  let st = $(window).scrollTop();
  let m3start = $('.main2').offset().top + $('.main2').height() * 0.8;
  if(st >= m3start){
    $('.main3 h1.title').css({
      opacity: 1,
      transform: 'translateY(0px)',
      transition: '2s'
    })
  }else {
    $('.main3 h1.title').css({
      opacity: 0,
      transform: 'translateY(100px)',
      transition: '2s'
    })
  }

  let m4start = $('.main3').offset().top + $('.main3').height() * 0.2;
  if(st >= m4start){
    $('.main4 h1.title').css({
      opacity: 1,
      transform: 'translateY(0px)',
      transition: '2s'
    })
  }else {
    $('.main4 h1.title').css({
      opacity: 0,
      transform: 'translateY(100px)',
      transition: '2s'
    })
  }
});

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

// 본문4 
let b1 = $('.slide1 .box1').offset().left;

// insertAfter