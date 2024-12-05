$(document).ready(function () {
    $('#mostrar').on('click', function () {
        if ($('#contenedor ul').length === 0) {
            $('#contenedor').append('<ul></ul>');
        }

        $.get('libros.xml')
            .done(function(xml) {
                $(xml).find("libro").each(function () { 
                    var titulo = $(this).find('titulo').text();
                    var anio_publicacion = $(this).find('anio_publicacion').text();
                    var autor = $(this).find('autor').text();
                    var genero = $(this).find('genero').text();

                    var li = `<li>${titulo} - ${autor} - ${anio_publicacion} - ${genero}</li>`;
                    $('#contenedor ul').append(li);
                });
            })
            .fail(function() {
                alert("No se ha podido cargar el archivo");
            });
    });
});
