window.onload = function() {
    botones();
}

function botones() {
    let boton = document.createElement("button");
    let contenido = document.createTextNode("Abrir");
    boton.appendChild(contenido);
    document.body.appendChild(boton);

    boton.addEventListener("click",
        function() {
            let popUp = window.open("","","width=300px,height=300px");
            let botonCerrar = popUp.document.createElement("button");
            let contenidoCerrar = popUp.document.createTextNode("Cerrar");
            botonCerrar.appendChild(contenidoCerrar);
            popUp.document.body.appendChild(botonCerrar); 

            botonCerrar.addEventListener("click",
                function() {
                    popUp.close();
                }
            )
        }
    );

}