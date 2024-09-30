window.onload = function() {
    addP();
    insert();
    replace();
    remove();
    clone();
}



function addP() {
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
        let childNode = document.getElementById("divisor").getElementsByTagName("p")[0];
        let parentNode = document.getElementById("divisor");
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
        }
    })
}

function remove() {
    let p = document.getElementById("divisor").getElementsByTagName("p")[1];
    if (p !== undefined) {
        let parentNode = document.getElementById("divisor");
        parentNode.removeChild(p);
    }
}

function clone() {
    let divCopia = document.createElement("div");
    divCopia.setAttribute("id","divCopia");
    let parentNode = document.getElementById("divisor");
    let copia = parentNode.cloneNode(true);
    divCopia.appendChild(copia);
    document.body.append(divCopia);
}

