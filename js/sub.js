// sub.js

// developer.html
// 개발자 스토리 탭
$('.storyTab li').click(function(){
    $('.storyTab li').removeClass('on');
    $(this).addClass('on');
    let i = $(this).index();
    $('.storyBoard > div').removeClass('active');
    $('.storyBoard > div').eq(i).addClass('active');
});