$(function () {
    $("#header").load("head.html");
    $("#footer").load("footer.html");
})
//banner轮播图\
var imgWidth = $(".banner ul li ").width();
var index = 0;
var new1 = $(".li1").clone(true);
var timer = null;
new1.appendTo(".banner ul");
$(".left").click(function () {
    index--;
    if (index < 0) {
        index = $(".banner ul li ").length - 2;
        $(".banner ul").css({"left": -(index + 1) * imgWidth})
    }
    $(".banner ul").stop().animate({"left": -index * imgWidth});
});
$(".right").click(function () {
    right();
})
var right = function () {
    index++;
    if (index > $(".banner ul li ").length - 1) {
        index = 0;
        $(".banner ul").css({"left": 0});
    }
    $(".banner ul").animate({"left": -(index) * imgWidth});
}
timer = setInterval(right, 2000)
$(".banner").mouseenter(function () {
    clearInterval(timer);
});
$(".banner").mouseleave(function () {
    timer = setInterval(right, 2000)
});
//小动画  板块一
$(window).on("scroll", function () {
    //console.log($(window).scrollTop());
    var a = $(window).scrollTop();
    if (a > 300) {
        $(".box_L").animate({"left": "680px"});
        $(".box_R").animate({"left": "-30px"})
    }
    if (a > 500) {
        $(".p1 ").addClass("pp");
        $(".ll").addClass("pp3");
    }
    if (a > 600) {
        $(".p2 ").addClass("pp");
        $(".ll").addClass("pp3");
        $(".box2-r").addClass("pp4");

    }
    if (a > 700) {
        $(".yy ").addClass("pp2");
        $(".ll").addClass("pp3");

    }
    if (a > 850) {
        $(".h1 ").addClass("pp4");
    }
    if (a > 1080) {
        $(".bao span ").addClass("pp6");
    }
    if (a > 1250) {
        $(".lie ul li div ").addClass("pp6");
    }
    if (a > 1400) {
        $(".box_4").addClass("pp7");
    }
    if (a > 1750) {
        $(".box_5 ul li h1").addClass("pp");
    }
    if (a > 1900) {
        $(".box_5 ul li p").addClass("pp7");
    }
    if (a > 2000) {
        $(".wqd a").addClass("pp");
    }
    if (a > 3100) {
        $(".foot ul li img").addClass("pp8");
    }
    if (a > 3700) {
        $(".box_9 span").addClass("pp");
    }
    if (a > 5000) {
        $(".box_10 div ul li div h4").addClass("pp9");
        $(".box_10 div ul li div span").addClass("pp2");
    }
    if (a > 5400) {
        $(".box_12 div img").addClass("pp9");
    }
    if (a > 6700) {
        $(".li p").addClass("pp12");
        $(".li div span").addClass("pp2");
        $(".uu li img").addClass("pp8");

    }
})
//选项卡
$(".xx").click(function () {
    var index;
    $(".xx").eq($(this).index()).addClass("bj").siblings().removeClass("bj"),
        $(".dd").eq($(this).index()).show().siblings().hide();
})
//轮播
var index1 = 0;
var timers = null;
var imgWidth1 = $(".da li").width();
$(".carousel li").click(function () {
    index1 = $(this).index();
    $(this).addClass('active').siblings().removeClass("active");
    $(".da").animate({"left": -(index1) * imgWidth1});
})
var right1 = function () {
    index1++;
    //console.log(index1);
    if (index1 > $(".dal").length - 1) {
        index1 = 0;
    }
    $(".da").animate({"left": -(index1) * imgWidth1});
    $(".carousel li").eq(index1).addClass('active').siblings().removeClass("active");
};
timers = setInterval(right1, 3000);
//轮播2
var index2 = 0;
var timer2 = null;
var imgWidth2= $(".d2").width();
$(".car li").click(function () {
    index2 =  $(this).index();
    $(this).addClass('active').siblings().removeClass("active");
    $(".daa").animate({"left": -(index2) * imgWidth2});
})
var right2 = function () {
    index2++;
    //console.log(index1);
    if (index2 > $(".d2").length - 1) {
        index2 = 0;
    }
    $(".daa").animate({"left": -(index2) * imgWidth2});
    $(".car li").eq(index2).addClass('active').siblings().removeClass("active");
};
timers = setInterval(right2, 3000);




