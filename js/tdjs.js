/**
 * Created by 东东❤ on 18-11-12.
 */
$(function () {
    $("#header").load("head.html");
    $("#footer").load("footer.html");
})
$(window).on("scroll", function () {
    var a = $(window).scrollTop();
    console.log(a);
    if(a>200){
        $(".pp").addClass("p1");
    }
    if(a>1640){
        $("footer .inner ul li span").addClass("p2");
        $("footer .inner ul li p").addClass("p3");
    }
})
