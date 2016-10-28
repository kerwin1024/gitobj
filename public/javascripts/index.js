/**
 * Created by Kerwin on 2016/10/27.
 */


function do_attr() {
    $("#div-1>p").attr({style: "border:1px solid #f00", alt: "设置style属性"});
    var oneTg = $("#div-1>p#one").attr("title");
    $("#div-1>p#one").html(oneTg + "的title属性被取得，并显示。");
    $("#div-1>p#two").attr("title", "修改two的style的属性。");
    $("#div-1>p#three").attr("title", function () {
        var title = this.id;
        return title;
    }).each(function () {
        $(this).html("title属性与下一个id属性取值" + this.title);
    });
}

function do_removeAttr() {
    $("#div-1 p#one").removeAttr("style");
}

function do_addClass() {
    $("#div-1 p#three").addClass("box color");
}

function do_removeClass() {
    $("#div-1 p#three").removeClass("box color");
}

$(function () {
    $("#div-1 p#one,#div-1 p#two").click(function () {
        $(this).toggleClass("redbox");
    });
    var cnt = 1;
    $("#div-1 p#three").click(function () {
        $(this).toggleClass("redbox", cnt++ % 3 === 0);
    });
})();

function do_html() {
    var val = $("#div-1 p#one").html();
    $("#div-1 p#two").html(val);
}

function do_text() {
    var val = $("#div-1 p#one").text();
    $("#div-1 p#two").text(val);
}

function do_val() {
    var val = $("#div-1 p#one").val();
    $("#div-1 p#two").val(val);
}

function do_css(){
    $("#div-1 p").each(function(){
        $(this).append("style属性中设置的颜色是["+$(this).css("color")+"]。");
    });
}

function do_css2(){
    $("#div-1 p#one").css("color","green");
    $("#div-1 p#two").css({color:"white",backgroundColor:"black"});
}

function do_offset(){
    var offset = $("#div-1 p#three").offset();
    $("#div-1 p#two").html("top="+offset.top+"px<br/>"+"left="+offset.left+"px");
}

function do_height(){
    $("#div-1 p#one").append("<br/>高度="+$("#div-1 p#one").height()+"px");
    $("#div-1 p#two").append("<br/>documen高度="+$(document).height()+"px");
    $("#div-1 p#three").append("<br/>window高度="+$(window).height()+"px");
}
function do_width(){
    $("#div-1 p#one").append("<br/>宽度="+$("#div-1 p#one").width()+"px");
    $("#div-1 p#two").append("<br/>documen宽度="+$(document).width()+"px");
    $("#div-1 p#three").append("<br/>window宽度="+$(window).width()+"px");
}