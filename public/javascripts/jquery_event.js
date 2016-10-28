/**
 * Created by Kerwin on 2016/10/28.
 */

$(function () {
    $("input#userName,input#pass").focus(function () {
        $(this).css("background-color", "red");
    });
    $("input#userName,input#pass").blur(function () {
        $(this).css("background-color", "#fff");
    });
    //点击登录时的操作
    $("#focus-submit").click(function () {
        if (("input#userName").val() == '') {
            alert("清输入账号");
            $("input#userName").focus();
        }
    })
});

$("button#ctrl_img").bind("click", function () {
    $("p#img").slideToggle();
});
