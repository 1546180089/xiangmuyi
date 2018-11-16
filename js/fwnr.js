/**
 * Created by 东东❤ on 18-11-12.
 */
$(function () {
    $("#header").load("head.html");
    $("#footer").load("footer.html");
})
$(window).on("scroll", function () {
    var b = $(window).scrollTop();
    console.log(b);
    if(b>300){
        $(".box_1 span").addClass("pp");
    }
    if(b>450){
        $(".div").addClass("p8");
        $(".pp").addClass("pp1");
    }
    if(b>800){
        $(".box_2 span").addClass("pp");
    }
    if(b>850){
        $(".con").addClass("pp6");
    }
    if(b>2000){
        $(".div1").addClass("p8");
        $(".wqd-svg").addClass("p2");
        $(".one").addClass("pp1");
        $(".two").addClass("p2");
        $(".three").addClass("pp1");
        $(".four").addClass("p2");


    }
    if(b>2500){
        $("footer span").addClass("pp2");
    }
})