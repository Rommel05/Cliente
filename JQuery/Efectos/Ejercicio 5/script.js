$(document).ready(function () {
    setTimeout(function () {  
        $('#p').queue(function(continuar) {
            $(this).animate({
                fontSize: '50px'            
            }, 1000);
            continuar();
        });
    
        $('#p').queue(function(continuar) {
            $(this).css({
                color: 'red'            
            });
            continuar();
        });
    
        $('#p').queue(function(continuar) {
            $(this).animate({
                left: '200px'            
            }, 1000);
            continuar();
        });
    
        //$('#p').dequeue();  
    }, 500);  
});
