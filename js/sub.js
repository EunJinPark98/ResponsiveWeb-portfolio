// sub.js
$(window).scroll(function(){
    let st = $(window).scrollTop();
    let blogStart = $('.developer_techBlog').offset().top;
    let blogEnd = blogStart + $('.developer_techBlog').height() * 0.4;
    if(st>=blogStart && st<=blogEnd){
        $('.blogBox2').css({
            transform : 'translateY(0)',
            opacity : 1,
            transition : '1.5s'
        })
    }else{
        $('.blogBox2').css({
            transform : 'translateY(200px)',
            opacity : 0,
            transition : '1.5s'
        })
    }
});

// 개발자 - 스토리 탭
$('.storyTab li').click(function(){
    $('.storyTab li').removeClass('on');
    $(this).addClass('on');
    let i = $(this).index();
    $('.storyBoard > div').removeClass('active');
    $('.storyBoard > div').eq(i).addClass('active');
});

