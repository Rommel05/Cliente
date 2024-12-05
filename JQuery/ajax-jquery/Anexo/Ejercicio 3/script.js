$(document).ready(function () {
    $('#mostrar').on('click', function() {
        $.ajax({
            type: "get",
            url: "script1.js",
            dataType: "script",
        })
    })  
});