$(document).ready(function () {
    $('input[type=radio]').change(function () { 
        let colorP = $(this).val();
        $('#p').css("background-color", colorP);
    });
});