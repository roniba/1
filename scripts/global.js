$(document).ready(function() {

    $("#addItemButton").click(function(){
        var itemToAdd = $('#addItemInput').val();
        if (itemToAdd) {
            $('#itemList').append('<li>'+itemToAdd+'</li>');
        }

    });
});