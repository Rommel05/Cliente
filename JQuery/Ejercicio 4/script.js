$(document).ready(function () {
    $('input[type=checkbox]').change(function () { 
        if ($(this).is(':checked')) {
            let num1 = $('#num1').val();
            let num2 = $('#num2').val();
            let suma = parseInt(num1) + parseInt(num2);

            let res = $('<input>').attr({
                type: 'text',
                value: suma
            })
            
            $('#form').append(res);
        }
    });
});