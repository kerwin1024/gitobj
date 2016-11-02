$(function () {
    $("#btn_com").click(function () {
        var para ="";
        $.ajax({
            url: '/users',
            type: 'POST',
            async: true,
            data: para,
            success: function (data) {
                $("#exec").html(data);
            }
        });
    });
});
$(document).ajaxStart(function(){
    $("#wait").css("display","block");
});
$(document).ajaxComplete(function () {
    $("#wait").css("display","none");
})
