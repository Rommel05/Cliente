$(document).ready(function () {
    $("#mostrar").on('click', function () {
        $.ajax({
            type: "get",
            url: "te.txt",
            dataType: "text",
        })
        .done(function (response) {
            $('#contenedor').html('');
            $('#contenedor').append('<p>' + response + '</p>');
        })
        .fail(function (jqXHR, errorThrown) {
            $('#contenedor').html('');
            $('#contenedor').append('<h2>Error ' + jqXHR.status + '</h2>' + errorThrown);
            $('#contenedor').append('<p>No se ha podido cargar el archivo</p>');
        })
    });
    
    
});
