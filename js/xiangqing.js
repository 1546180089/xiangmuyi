/**
 * Created by 东东❤ on 18-11-14.
 */
$(function () {
    $("#header").load("head.html");
    $("#footer").load("footer.html");
    getList();
    $("#btn").click(function () {
        pageStart++;
        if(pageStart>3){
            $("#btn").hide();
            return false
        }else{
            getList();
        }

    })

})
var pageStart = 0;
function getList(){
    var result = listData["listData0"+pageStart];
    //console.log(result);
    var list  = result.data.list;
    //console.log(list);
    var pageSize =  result.data.pageSize;
    //console.log(pageSize);
    if(pageStart == 0){
        $("#art").html();
    }
    for (var i = 0; i < list.length; i++) {
        var htmlmodel = $("#cont").html();
        //console.log(htmlmodel);
        htmolmodel =  htmlmodel.replace("$articleid$",list[i].sysId)
            .replace("$img$",list[i].coverImg)
            .replace("$title$",list[i].title)
            .replace("$time$",list[i].creatAt)
            .replace("$descript$",list[i].describe)
        $("#art").append(htmolmodel);

    }


}


