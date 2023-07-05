// common.js

// 헤더 색상변경
$('#header').mouseover(function(){
    $(this).css({
        backgroundColor : '#fff'
    });
}).mouseout(function(){
    $(this).css({
        backgroundColor : 'transparent'
    });
});
// 모바일 메뉴 열기
$('.menuBtn').click(function(){
    $('.menu_top').fadeIn(function(){
        $('.menu_bottom').slideDown();
    });
    return false;
});
// 모바일 메뉴 닫기
$('.menu_close').click(function(){
    $('.menu_bottom').slideUp(function(){
        $('.menu_top').fadeOut();
    });
    return false;
});
// 모바일 gnb 서브메뉴 열기
$('.gnb .d1').click(function(){
    $(this).find('.sub').stop().slideToggle();
    $(this).find('.m1').toggleClass('on');
    return false;
});
// PC gnb 서브메뉴 열기
$('.pc_gnb .m1').mouseover(function(){
    $('.pc_gnb_bg').stop().slideDown();
    $(this).next().stop().slideDown();

}).mouseout(function(){
    $('.pc_gnb_bg').stop().slideUp();
    $(this).next().stop().slideUp();
});

