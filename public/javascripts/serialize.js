$(function () {
    var para="";
    $("#signup").click(function(){
        para = $("#registerForm").serialize();
        alert(para);
        $.ajax({
            url: '/signup',
            type: 'POST',
            async: true,
            data: para,
            success: function(data){
                $("#serialize.html").html(data);
            }
        });
    });
});