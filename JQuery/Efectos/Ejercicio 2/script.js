$(document).ready(function () {
    $('#saludo').on('click', function () {
        $('p').fadeIn(1000);
    });

    $('#despedida').on('click', function () {
        $('p').fadeOut(1000);
    });
});