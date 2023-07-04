// common.js

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

