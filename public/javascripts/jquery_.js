$(document).ready(function () {
    $("#show").click(function () {
        $("#show_hide").show();
    });
    $("#hide").click(function () {
        $("#show_hide").hide();
    });
});
$(function () {
    $("#toggleBtu").click(function () {
        $("#img1").toggle("slow");
    })
});

$(function(){
    $("#slideDownBtn").click(function () {
        $("#show_hide").slideDown("slow");
    });
    $("#slideUpBtn").click(function () {
        $("#show_hide").slideUp("slow");
    });
});

$(function () {
    $("#slideToggleBtn").click(function () {
        $("#show_hide").slideToggle("slow");
    });
});

$(function () {
    $("#fadeOutBtn").click(function () {
        $("#img1").fadeOut("fast");
    });
    $("#fadeInBtn").click(function () {
        $("#img1").fadeIn("fast");
    });
});

$(function () {
    $("#fadeToggleBtn").click(function () {
        $("#img1").fadeToggle("1000","linear");
    });
});