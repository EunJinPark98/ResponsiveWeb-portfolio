// main.js

// 브라우저 스크롤 이벤트 
// $(window).scroll(function(){
//   let st = $(window).scrollTop();
//   if(st >= 60){
     
//   }else {
      
//   }
// });
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

// 본문4 무한롤링배너
let roller = document.querySelector('.bann_list');
roller.id = 'roller1';
let clone = roller.cloneNode(true);
clone.id = 'roller2';
document.querySelector('.bann_list ul').appendChild(clone);
document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.bann_list').offsetWidth + 'px';

roller.classList.add('original');
clone.classList.add('clone');