$(function(){
    $("#btn_ajax").click(function () {
        var para = "";
        $.ajax({
            url:'/users',
            type: 'POST',
            async: true,
            data: para,
            success: function(data){
            $("div#exec").html(data);
        }
        });
    });
});