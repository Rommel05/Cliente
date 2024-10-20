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
<<<<<<< HEAD

    /*for (let i = 0; i < input.length; i++) {
        if (input[i].getAttribute("type") == "text") {
            input[i].addEventListener("keypress", function(event) {
                if (event.key < '0' || event.key > '9') {
                    event.preventDefault();
                }
            })
        }
    }*/
=======
>>>>>>> efabff72f2360798dbfe4a53485629db103a3713
}