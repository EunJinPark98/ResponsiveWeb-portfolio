// common.js
// 브라우저 스크롤
$(window).scroll(function(){
    let st = $(window).scrollTop();
    if(st >= 60){
        $('#header').addClass('fixed');
    }else {
        $('#header').removeClass('fixed');
    }
});
// 헤더 마우스 올리면 색상 변경
$('#header').mouseover(function(){
    $(this).css({
        backgroundColor : '#fff'
    });
    $('.header_in').css({
        backgroundColor : '#fff'
    });
    $('.pc_gnb .d1 a').css({
        color : '#000'
    })
    $('.pc_recruit a').css({
        color : '#191919'
    })
}).mouseout(function(){
    $(this).css({
        backgroundColor : 'transparent'
    });
    $('.header_in').css({
        backgroundColor : 'transparent'
    });
    $('.pc_gnb .d1 a').css({
        color : '#fff'
    })
    $('.pc_recruit a').css({
        color : '#fff'
    })
});
// 모바일 메뉴 열기
$('.menuBtn').click(function(){
    $('.menu_top').fadeIn(function(){
        $('.menu_bottom').slideDown();
    });
    // @다시보기@ "브라우저 스크롤바 없애기"
    $(window).css({
        position : 'fixed',
        scroll : 'default'
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
    $(window).css({
        position : 'relative'
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

