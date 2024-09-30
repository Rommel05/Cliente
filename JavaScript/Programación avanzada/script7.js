window.onload = function () {
    botones("azul","blue");
    botones("verde","green");
    botones("rojo","red");
    
    /*botonAzul();
    botonVerde();
    botonRojo();*/
}

function botones(texto,colores) {
    let boton = document.createElement("button");
    let contenido = document.createTextNode(texto);
    boton.appendChild(contenido);
    document.body.appendChild(boton);
    function color() {
        document.body.style.backgroundColor=colores;   
    }

    boton.addEventListener("click",color);
}

/*function botonAzul() {
    let botonAzul = document.createElement("button");
    botonAzul.setAttribute("id","azul");
    let contenidoAzul = document.createTextNode("azul");
    botonAzul.appendChild(contenidoAzul);
    document.body.appendChild(botonAzul);

    function colorAzul() {
        document.body.style.backgroundColor="blue";   
    }

    botonAzul.addEventListener("click",colorAzul);
}

function botonVerde() {
    let botonVerde = document.createElement("button");
    botonVerde.setAttribute("id","verde");
    let contenidoVerde = document.createTextNode("verde");
    botonVerde.appendChild(contenidoVerde);
    document.body.appendChild(botonVerde);

    function colorVerde() {
        document.body.style.backgroundColor="green";   
    }

    botonVerde.addEventListener("click",colorVerde);
}

function botonRojo() {
    let botonRojo = document.createElement("button");
    botonRojo.setAttribute("id","rojo");
    let contenidoRojo = document.createTextNode("rojo");
    botonRojo.appendChild(contenidoRojo);
    document.body.appendChild(botonRojo);
    
    function colorRojo() {
        document.body.style.backgroundColor="red";   
    }

    botonRojo.addEventListener("click",colorRojo);
}*/