$(document).ready(function () {
    $('#enviar').on('click', function () {
        let data = $('#form').serialize();

        $.ajax({
            type: "post",
            url: "form.php",
            data: data,
            dataType: 'text',
        })
        .done(function (response) {
            $('#contenedor').html('');
            $('#contenedor').append(response);
        })
        .fail(function(jqXHR) {
            $('#contenedor').html('');
            $('#contenedor').append('<h1>' + jqXHR.status + '</h1>');
        });
    });
});