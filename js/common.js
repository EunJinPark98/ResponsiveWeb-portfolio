// common.js

// 헤더영역 색상변경
$('#header').mouseover(function(){
    $(this).css({
        backgroundColor : '#fff'
    });
}).mouseout(function(){
    $(this).css({
        backgroundColor : 'transparent'
    });
});

// 모바일 아코디언 메뉴
$('.gnb .d1').click(function(){
    $(this).find('.sub').stop().slideToggle();
    // "가상태그로 만든 화살표.. 부드럽게 회전하고 싶은데 안됩니다..ㅜ"
    $(this).find('.m1').toggleClass('on');
    return false;
});

// PC gnb 서브메뉴
$('.pc_gnb .m1').mouseover(function(){
    $(this).animate({
        textDecorate : 'underline'
    });
    $('.pc_gnb_bg').stop().slideDown();
    $(this).next().stop().slideDown();

}).mouseout(function(){
    $('.pc_gnb_bg').stop().slideUp();
    $(this).next().stop().slideUp();
});

