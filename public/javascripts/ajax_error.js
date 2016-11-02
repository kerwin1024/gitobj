$(function(){
    $("#btn_error").click(function(){
        var para = "";
        $.ajax({
            url: '/users',
            type: "POST",
            async: true,
            data: para,
            success: function(data){
                $("#exec").html(data);
            }
        });
    });
});

$(document).ajaxError(function(){
    $("div#comp").html("<p>ajax送信失败！</p>").css("color","red");
});