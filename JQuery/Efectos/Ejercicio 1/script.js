$(document).ready(function () {

    $('#show').on('click', function () {
        $('img').show();
    });

    $('#hide').on('click', function () {
        $('img').hide();
    });

    $('#fadeOut').on('click', function () {
        $('img').fadeOut(2000);
    });

    $('#fadeIn').on('click', function () {
        $('img').fadeIn(2000);
    });

    $('#slideUp').on('click', function () {
        $('img').slideUp(2000);
    });
    
    $('#slideDown').on('click', function () {
        $('img').slideDown(2000);
    });

    $('#animate').on('click', function () {
        $('img').animate({left: '250px'}, 2000)
    });

    

});