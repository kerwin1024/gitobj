//load方法
$(document).ready(function () {
    $("#btn_load").click(function(){
        $("div#exec").load("/ajax_test.html li:even");
    });
});