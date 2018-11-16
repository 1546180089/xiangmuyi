/**
 * Created by 东东❤ on 18-11-12.
 */
$(function () {
    $("#header").load("head.html");
    $("#footer").load("footer.html");
    var index = 0;
    var timer = null;
    var imgWidth = $(".dal").width();
    $(".carousel li").click(function () {
        index = $(this).index();
        $(this).addClass('active').siblings().removeClass("active");
        $(".da").animate({"left": -(index) * imgWidth});
    })

    var right = function () {
        index++;
        if (index> $(".dal").length - 1) {
            index = 0;
        }
        $(".da").animate({"left": -(index) * imgWidth});
        $(".carousel li").eq(index).addClass('active').siblings().removeClass("active");
    };
    timer = setInterval(right, 2000);
});





$(window).on("scroll", function () {

    var b = $(window).scrollTop();
    //console.log(b);
    if(b>250){
        $(".ss").addClass("pp");
    }
    if(b>350){
        $(".ll").addClass("pp1");
        $(".yy").addClass("pp3");
        $(".p1").addClass("pp4");
    }
    if(b>1000){
        $(".box_5 p").addClass("pp5");
        $(".box_5 h1").addClass("pp6");
    }
    if(b>2100){
        $(".div").addClass("pp6");
    }
    if(b>2500){
        $("footer span").addClass("pp2");
    }
})