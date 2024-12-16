$(document).ready(function () {
    $.getJSON("https://restcountries.com/v3.1/region/europe")
        .done(function (response) {
            response.forEach(pais => {
                $('#paises').append('<li>' + pais.name.common + '</li>')
            });
        })
        .fail(function (jqXHR) { 
            alert('Error: ' + jqXHR.status);
        })    
    ;

    /*$.ajax({
        type: "get",
        url: "https://restcountries.com/v3.1/region/europe",
        dataType: "json",
    })
    .done(function(response) {
        response.forEach(pais => {
            $('#paises').append('<li>' + pais.name.common + '</li>')
        });
    })
    .fail(function (jqXHR) { 
        alert('Error: ' + jqXHR.status);
    })
    ;*/


    /*fetch('https://restcountries.com/v3.1/region/europe', {method: 'GET'})
        .then(response => response.json())
        .then(data => {
            data.forEach(pais => {
                $('#paises').append('<li>' + pais.name.common + '</li>')
            }); 
        })
        .catch(error => {
            alert('Error: ' + error);
        });    
        */
});