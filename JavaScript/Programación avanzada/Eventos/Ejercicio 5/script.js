window.onload = function() {
    numeros();
}

function numeros() {
    let form = document.getElementById("form");
    let input = form.getElementsByTagName("input");
    for (let i = 0; i < input.length; i++) {
        if (input[i].getAttribute("type") == "text") {
            input[i].addEventListener("keypress", function(event) {
                if (event.keyCode < 48 || event.keyCode > 57) {
                    event.preventDefault();
                }
            })
        }
    }
}