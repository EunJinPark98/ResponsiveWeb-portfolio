// common.js
// 브라우저 스크롤 이벤트 헤더고정
$(window).scroll(function(){
    let st = $(window).scrollTop();
    if(st >= 60){
        $('#header').addClass('fixed');
    }else {
        $('#header').removeClass('fixed');
    }
});
// 모바일 메뉴 열기
$('.menuBtn').click(function(){
    $('.menu_top').fadeIn(function(){
        $('.menu_bottom').slideDown();
    });
    $('#wrap').css({
        position: 'fixed'
    });
    return false;
});
// 모바일 메뉴 닫기
$('.menu_close').click(function(){
    $('.menu_bottom').slideUp(function(){
        $('.menu_top').fadeOut();
    });
    $('.menu_bottom .sub').stop().slideUp();
    $('.menu_bottom .m1').removeClass('on');
    $('#wrap').css({
        position: 'relative'
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
$('.pc_gnb .d1').mouseover(function(){
    if($(this).find('.sub').length > 0){
        $('.pc_gnb_bg').stop().slideDown();
        $(this).find('.sub').stop().slideDown();
    }
}).mouseout(function(){
    $('.pc_gnb_bg').stop().slideUp();
    $(this).find('.sub').stop().slideUp();
});

// 푸터 - 관련사이트 열기
$('.site').click(function() {
    $(this).find('span').animate({
        rotate: '-=45deg'
    });
    $('.site_open').toggle();
});

// 푸터 - gnb 서브메뉴 열기
$('.f_gnb .d1').click(function(){
    $(this).find('.sub').toggle();
    $(this).find('span').animate({
        rotate: '-=180deg'
    });
    return false;
})



