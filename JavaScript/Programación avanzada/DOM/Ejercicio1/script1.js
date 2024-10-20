window.onload = function() {
    add();
    insert();
    replace();
    remove();
    clone();
}



function add() {
    let add = document.getElementById("add");
    add.addEventListener("click", function() {
        let p = document.createElement("p");
        let contenidoP = document.createTextNode("Parrafo añadido")
        let parentNode = document.getElementById("divisor")
        p.appendChild(contenidoP);
        parentNode.appendChild(p);
    })
}

function insert() {
    let insertar = document.getElementById("insertar");
    insertar.addEventListener("click", function() {
        let p = document.createElement("p");
        let contenidoP = document.createTextNode("Párrafo insertado");
        p.appendChild(contenidoP);
        let parentNode = document.getElementById("divisor");
        let childNode = parentNode.getElementsByTagName("p")[0];
        parentNode.insertBefore(p, childNode.nextSibling);
        //.nextSibling va al nodo siguiente
    })
}

function replace() {
    let replace = document.getElementById("reemplazar");
    replace.addEventListener("click", function() {
        let p = document.createElement("p");
        let contenidoP = document.createTextNode("Parrafo remplazado");
        p.appendChild(contenidoP);
        let parentNode = document.getElementById("divisor");
        let childNode = document.getElementById("divisor").getElementsByTagName("p")[1];

        if (childNode !== undefined) {
            parentNode.replaceChild(p, childNode);
        } else {
            window.alert("No puedes modificar el primer párrafo")
        }
    })
}

function remove() {
    let remove = document.getElementById("borrar");
    remove.addEventListener("click", function() {
        let parentNode = document.getElementById("divisor");
        let childNode = parentNode.getElementsByTagName("p")[1];
        if (childNode !== undefined) {
            parentNode.removeChild(childNode);
        } else {
            window.alert("No puedes eliminar el primer párrafo");
        }
    })
}

function clone() {
    let clone = document.getElementById("clonar")
    clone.addEventListener("click", function() {
        let parentNode = document.getElementById("divisor");
        let copia = parentNode.cloneNode(true);
        let divCopia = document.createElement("div");
        divCopia.appendChild(copia);
        let botones = document.getElementById("divBotones");
        document.body.insertBefore(divCopia, botones);
    })
}

