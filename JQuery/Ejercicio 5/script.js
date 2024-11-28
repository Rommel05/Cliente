$(document).ready(function() {
    /*$('p').mouseover(function () { 
        $('p').css('font-size', '16px');
    });

    $('p').mouseout(function () { 
        $('p').css('font-size', '12px');
    });*/

    $('p').mouseover(function () { 
        $('p').removeClass('tamaño-inicial');
        $('p').addClass('tamaño-aumentado');
    });

    $('p').mouseout(function () { 
        $('p').removeClass('tamaño-aumentado');
        $('p').addClass('tamaño-inicial');
    });
})
