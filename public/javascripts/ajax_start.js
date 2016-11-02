$(function () {
    $("#btn").click(function(){
        $("div#exec").load("/ajax_test.html li:even");
    });
});

$(document).ajaxSuccess(function () {
    $("#succ").html("<p>发送成功！</p>").css("color","green");
});