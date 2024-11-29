$(document).ready(function () {
    $('#mostrar').on('click', function () {
        //$('#contenedor').load("texto.txt"); 

        $.ajax({
            type: "get",
            url: "texto.txt",
            dataType: "text",
            success: function (response) {
                $('#contenedor').append(response); 
            },
            error: function () { 
                alert("No se ha podido cargar el archivo")
             }
        });
    });
});