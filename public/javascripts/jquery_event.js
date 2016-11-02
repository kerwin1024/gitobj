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
            $("#img_toggle").attr("src", "../images/SC01C02.jpg");
        },
        function () {
            $("#img_toggle").attr("src", "../images/SC01C03.jpg");
        },
        function () {
            $("#img_toggle").attr("src", "../images/SC01C04.jpg");
        }
    );

});

$(function () {
    $("#mouse_img_one").mouseover(function () {
        $(this).attr("src", "../images/SC01C04.jpg");
    });
    $("#mouse_img_one").mouseout(function () {
        $(this).attr("src", "../images/SC01C01.jpg");
    });
    $("#mouse_img_two").mouseover(function () {
        $(this).attr("src", "../images/SC01C05.jpg");
    });
    $("#mouse_img_two").mouseout(function () {
        $(this).attr("src", "../images/SC01C02.jpg");
    });
    $("#mouse_img_three").mouseover(function () {
        $(this).attr("src", "../images/SC01C05.jpg");
    });
    $("#mouse_img_three").mouseout(function () {
        $(this).attr("src", "../images/SC01C03.jpg");
    });
});

$("#img_hover").hover(
    function () {
        $("#img_hover").attr("src", "../images/SC01C01.jpg")
    },
    function () {
        $("#img_hover").attr("src", "../images/SC01C02.jpg")
    }
);

function getToTopLength() {
    if ($(window).scroll()) {
        $(window).scroll(function () {
            console.log($(this).scrollTop());
        });
    }
}
