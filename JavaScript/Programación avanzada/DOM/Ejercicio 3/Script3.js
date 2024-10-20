window.onload = function() {
    botones("Azul","blue");
    botones("Rojo","red");
    botones("Restablecer color inicial","default");
}

function botones(texto,colores) {
    let boton = document.createElement("button");
    let contenido = document.createTextNode(texto);
    boton.appendChild(contenido);
    document.body.appendChild(boton);

    function color() {
        let div = document.getElementsByTagName("div")[0];
        if (colores === "default") {
            div.style.backgroundColor = "";
        } else {
            div.style.backgroundColor = colores;
        }
    }
    boton.addEventListener("click",color);
}