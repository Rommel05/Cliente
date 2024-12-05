$(document).ready(function () {
    $('#mostrar').on('click', function () {
        let img = $('<img>').attr({
            src: 'img/cargar.gif',
            alt: 'logo carga',
            id: 'carga'
        })

        $.ajax({
            type: "get",
            url: "date.php",
            dataType: "text",
            beforeSend: function () {
                $('#contenedor').append(img);
            }
        })
        .done(function(response) {
            setTimeout(function () {
                $('#contenedor').html(response);
            }, 3000)
            
        })
        .fail(function(jqXHR) {
            setTimeout(function() {
                $('#contenedor').html('<h1>Error ' + jqXHR.status + '</h1>');
            }, 3000)
        })
        ;
    });


});