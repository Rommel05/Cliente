$(document).ready(function () {
    $("#mostrar").on('click', function () {
        $.ajax({
            type: "get",
            url: "texto.txt",
            dataType: "text",
        })
        .done(function (response) {
            $('#contenedor').html('');
            $('#contenedor').append('<p>' + response + '</p>');
        })
        .fail(function (jqXHR) {
            $('#contenedor').html('');
            $('#contenedor').append('<h2>Error ' + jqXHR.status + '</h2>');
            $('#contenedor').append('<p>No se ha podido cargar el archivo</p>');
        })
    });
    
    
});