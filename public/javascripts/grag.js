//dragable
$(function () {
    $("#draggable1").draggable()
})
// list
$(function () {
    $("#draggable li").draggable({
        connectToSortable: "#sortable",
        cursorAt: {top:2,left:2},
        helper: 'clone',
        revert: 'invalid'
    });
    $("#sortable").sortable({
        items:'li:gt(0)',
        revert: true,
        out: function () {
            $('#result').empty();
            $(this).children().each(function (index) {
                if(index == 0) return;
                $('#result').append('第'+index+'号'+$(this).text()+'.');
            })
        }
    })
});

$(function () {
    $("ul#ul-sortable").sortable();
});

$(function(){
    $("#selectableUl").selectable();
});

$(function(){
    $("#accordion,#accordion1,#accordion2").accordion({
        active: false,
        collapsible: true,
        autoHeight:false
    });
});

$("#dialog").dialog({autoOpen:false});
    $("#opener").click(function(){
        $("#dialog").dialog("open");
    });

$("#progressbar").progressbar({
    value:0
});

$(function () {
    var intervalCode = setInterval((function () {
        var counter= 0;
        return function(){
            counter>100?clearInterval(intervalCode):$("#progressbar").progressbar('value',++counter);
        }
    }),100);
});

$(function () {
    $("#tabs").tabs();
});

$(function () {
    var tags = ["eclipse","sublime","webstorm","hbuilder"];
    $("#autocomplete").autocomplete({
        source: function (request,reponse) {
            var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term),"i");
            reponse($.grep(tags,function (item) {
                return matcher.test(item);
            }));
        }
    });
});