// sub.js
$(window).scroll(function(){
    let st = $(window).scrollTop();
    let b2_Start = $('.developer_techBlog').offset().top;
    let b2_End = b2_Start + $('.developer_techBlog').height() * 0.3;
    if(st>=b2_Start && st<=b2_End){
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
    let b3_Start = $('.blogBox2').offset().top;
    let b3_End = b3_Start + $('.developer_techBlog').height() * 0.3;
    if(st>=b3_Start && st<=b3_End){
        $('.blogBox3').css({
            transform : 'translateY(0)',
            opacity : 1,
            transition : '1.5s'
        })
    }else{
        $('.blogBox3').css({
            transform : 'translateY(200px)',
            opacity : 0,
            transition : '1.5s'
        })
    }
    let b4_Start = $('.blogBox3').offset().top;
    let b4_End = b4_Start + $('.developer_techBlog').height() * 0.3;
    if(st>=b4_Start && st<=b4_End){
        $('.blogBox4').css({
            transform : 'translateY(0)',
            opacity : 1,
            transition : '1.5s'
        })
    }else{
        $('.blogBox4').css({
            transform : 'translateY(200px)',
            opacity : 0,
            transition : '1.5s'
        })
    }
    let b5_Start = $('.blogBox4').offset().top;
    let b5_End = b5_Start + $('.developer_techBlog').height() * 0.3;
    if(st>=b5_Start && st<=b5_End){
        $('.blogBox5').css({
            transform : 'translateY(0)',
            opacity : 1,
            transition : '1.5s'
        })
    }else{
        $('.blogBox5').css({
            transform : 'translateY(200px)',
            opacity : 0,
            transition : '1.5s'
        })
    }
    let b6_Start = $('.blogBox5').offset().top;
    let b6_End = b6_Start + $('.developer_techBlog').height() * 0.3;
    if(st>=b6_Start && st<=b6_End){
        $('.blogBox6').css({
            transform : 'translateY(0)',
            opacity : 1,
            transition : '1.5s'
        })
    }else{
        $('.blogBox6').css({
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

