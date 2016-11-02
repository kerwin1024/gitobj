$(function(){
    $("#draggable_1 li").draggable({
        connectToSortable: "#draggble",
        cursorAt:{top:2,left:2},
        helper: 'clone',
        revert: 'invalid'
    });
    $("#draggable").droppable({
        drop:function (event,ui) {
            $(ui.droppable).fadeIn(function () {
                $("#result_1").append(this);
            }).fadeOut('slow',function () {
                $(this).remove();
            });
        }
    });
    $("#draggable_1 li,#draggable,#result_1 li").disableSelection();
    
    $("#resizable").resizable({
        aspectRatio: true,
        start:function (event,ui) {
            if(!$(this).resizable('option','maxHeight')){
                $(this).resizable('option','maxHeight',ui.originalSize.height*2);
                $(this).resizable('option','maxWidth',ui.originalSize.width*2);
                $(this).resizable('option','minWidth',ui.originalSize.width*2);
                $(this).resizable('option','minHeight',ui.originalSize.height*2);
            }
        }
    });
});