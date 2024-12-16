$(document).ready(function() {
    $('h1').click(function() {
        $(this).animate({
            color: "red"
        }, 100);
    });
});