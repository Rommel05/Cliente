$(document).ready(function () {
    
    function moverCuadrado() {
        $('img').animate({ left: '100px' }, 300) 
        .animate({ top: '100px' }, 300)  
        .animate({ left: '0px' }, 300)   
        .animate({ top: '0px' }, 300, function () { 
            moverCuadrado();
        });
    }
    
    $('#iniciar').on('click', moverCuadrado);
    $('#parar').on('click', function () {
        $('img').stop(true);
    });
});