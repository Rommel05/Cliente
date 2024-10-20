window.onload = function() {
    actionsForm();
}

function actionsForm() {
    let form = document.getElementById("form");
    let inputs = form.getElementsByTagName("input");

    
    const formatosValidos = /\.(jpg|jpeg|png)$/i;
    const formatoDniValido = /^(\d{8})([A-Z])$/;
    const formatoNumValido = /^\d{9}$/;


    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name == "nombre") {
            inputs[i].focus();
        }

        if (inputs[i].name == "foto") {
            inputs[i].addEventListener("change", function() {
                let archivo = inputs[i].files[0];

                if (archivo && !formatosValidos.test(archivo.name)) {
                    window.alert("Formato no válido")
                    inputs[i].value = "";
                }
            })
        }


        if(inputs[i].type == "submit") {
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].name == "telefono") {
                    inputs[i].addEventListener("keypress", function(event) {
                        if (event.key < '0' || event.key > '9') {
                            event.preventDefault();
                        }
                    });
                }
            }
            inputs[i].addEventListener("click", function(event) {
                event.preventDefault();

                let dni = "";
                let tel = "";
                for (let j = 0; j < inputs.length; j++) {
                    if (inputs[j].name == "dni") {
                        dni = inputs[j].value;
                    }
                    if (inputs[j].name == "telefono") {
                        tel = inputs[j].value;
                    }
                }

                if (validarDni(dni) && validarTelefono(tel)) {
                    form.submit();
                }
            })
        }


        if(inputs[i].type == "reset") {
            inputs[i].addEventListener("click", function(event) {
                event.preventDefault();
                form.reset();
            })
        }

        
    }

    let select = document.getElementsByTagName("select");

    for (let i = 0; i < select.length; i++) {

            select[i].addEventListener("change", function() {

            let indiceSelecccionado = select[i].selectedIndex;

            let opciones = select[i].length;

            let opcionSeleccionada = select[i].options[indiceSelecccionado];

            let textoSeleccionado = opcionSeleccionada.text;

            let valorSeleccionado = opcionSeleccionada.value;

            window.alert("La longitud de la lista es " + opciones + '\n' + "El índice seleccionado es el " + indiceSelecccionado + '\n' + "El valor del indice seleccionado es " + textoSeleccionado)

        })
    }

    let textArea = document.getElementsByTagName("textarea");

    for (let i = 0; i < textArea.length; i++) {

        textArea[i].maxLength = 150;

    }

    function validarDni(dni) {

        if (!dni.trim()) {
            window.alert("El campo DNI no puede estar vacio");
            return false;
        } else if(!formatoDniValido.test(dni))  {
            window.alert("Formato de DNI no valido");
            return false;
        } else {
            return true;
        }

    }

    function validarTelefono(tel) {

        if (!tel.trim()) {
            window.alert("El campo de teléfono no puede estar vacío");
            return false;
        } else if (!formatoNumValido.test(tel)) {
            window.alert("Formato de número de teléfono no válido");
            return false;
        } else {
            return true;
        }

    }

}