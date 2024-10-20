window.onload = function() {
    enviar();
}

function enviar() {
    let form = document.body.firstElementChild;
    let inputs = form.getElementsByTagName("input");
    let submit = form.lastElementChild;

    submit.addEventListener("click", function(event) {
        let bool = true;
        /*for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                event.preventDefault();
                bool = false;
                break;
            }
        }*/

        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                bool = false;
            }
        }

        if (bool) {
            window.alert("Se ha enviado correctamente")
        } else {
            event.preventDefault();
            window.alert("Faltan campos por rellenar")
        }
    })

}