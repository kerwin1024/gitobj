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
        if ($.trim("input#userName").val().length === 0) {
            alert("清输入账号");
            $("input#userName").focus();
        }
    });
});

$("button#ctrl_img").bind("click", function () {
    $("p#img").slideToggle();
});

$(function () {
    $("#img_click").click(function () {
        var imgHtml = '<img src="../images/eg_car2.jpg">';
        $(this).html(imgHtml);
    });
});

$(function () {
    $("#img_toggle").toggle(
        function () {
            $("#img_toggle").attr("src", "../imgages/SC01C02.jpg");
        },
        function () {
            $("#img_toggle").attr("src", "../imgages/SC01C03.jpg");
        },
        function () {
            $("#img_toggle").attr("src", "../imgages/SC01C04.jpg");
        }
    );

});