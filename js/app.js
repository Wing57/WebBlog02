
$(function () {
    // header
    var nav = $(".header"); //得到导航对象
    var win = $(window); //得到窗口对象
    var sc = $(document);//得到document文档对象。
    var hei = $(".header").height();
    win.scroll(function () {
        if (sc.scrollTop() >= hei) {
            nav.addClass("header_change");
            $(".header_logo_img").attr("src", "img/head/logo2.png");
        } else {
            nav.removeClass("header_change");
            $(".header_logo_img").attr("src", "img/head/logow.png");
        }
    })
    //headermb
    $(".header_mb01_btn").click(function () {
        $(".header_mb02").fadeIn(300);
        $(".header_mb03").addClass("header_mb03_show");
        $("body").addClass("Body_noscroll");
    })
    $(".header_mb02").click(function () {
        $(this).fadeOut(300);
        $(".header_mb03").removeClass("header_mb03_show");
        $("body").removeClass("Body_noscroll");
    })
    footer_anrun();
    //about
    // $('.about_scrolltext01').liMarquee(
    //     {
    //         hoverstop: false,
    //         scrollamount: 20
    //     }
    // );
    // $('.about_scrolltext02').liMarquee({
    //     direction: 'right',
    //     hoverstop: false,
    //     scrollamount: 20
    // });
    // $('.about_scrolltext03').liMarquee(
    //     {
    //         hoverstop: false,
    //         scrollamount: 20
    //     }
    // );
    cartoon_carousel();
    fixed02();
    fixed01();
})
function footer_anrun() {
    var count = 0;
    function footer_an() {
        $('.footer_inner_0102 a').removeClass('footer_inner_0102an');
        $('.footer_inner_0102 a').eq(count).addClass('footer_inner_0102an');
        count++;
        if (count >= $('.footer_inner_0102 a').length) {
            count = 0;
        }
    }
    var footer_antime = setInterval(footer_an, 1000);
    $('.footer_inner_0102 a').mouseenter(function () {
        clearInterval(footer_antime);
        $('.footer_inner_0102 a').removeClass('footer_inner_0102an');
    }).mouseleave(function () {
        count = $(this).index() + 1;
        footer_antime = setInterval(footer_an, 1000);
    });
}
//漫画页面轮播
function cartoon_carousel() {
    var count = 1;
    function cartoon_an() {
        $('.car01_carousel_li').removeClass('active');
        $('.car01_carousel_li').eq(count).addClass('active');
        count++;
        if (count >= $('.car01_carousel_li').length) {
            count = 0;
        }
    }
    setInterval(cartoon_an, 5000);
}
//详情页
function fixed02() {
    var domtop = $(".details_box").offset().top;
    $(window).scroll(function () {
        var wintop = $(window).scrollTop();
        if (wintop >= domtop) {
            $(".details_box").addClass("details_fixed col-2");
        }
        else {
            $(".details_box").removeClass("details_fixed col-2");
        }
    })
}

function fixed01() {
    var domtop = $(".details_box2").offset().top;
    $(window).scroll(function () {
        var wintop = $(window).scrollTop();
        if (wintop >= domtop) {
            $(".details_box2").addClass("details_fixed2 col-2");
        }
        else {
            $(".details_box2").removeClass("details_fixed2 col-2");
        }
    })
}