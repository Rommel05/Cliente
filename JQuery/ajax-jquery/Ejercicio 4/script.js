$(document).ready(function () {
    $('#mostrar').on('click', function () {
        let datos = {
            nombre: "Rommel",
            apellido: "Romero"
        };

        $.post("datos.php", datos)
            .done(function(data) { 
                $('#contenedor').html(data);
            })
            .fail(function() { 
                alert("Error al enviar los datos.");
            });
    });
});
