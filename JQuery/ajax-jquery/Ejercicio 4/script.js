$(document).ready(function () {
    $('#mostrar').on('click', function () {
        let datos = {
            nombre:"Rommel",
            apellido:"Romero"
        }
        $.post("datos.php", datos,
            function (data) {
                $('#contenedor').html(data);
            },
        ); 
    });
});