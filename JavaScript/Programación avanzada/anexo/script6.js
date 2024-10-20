window,onload = function() {
    suma();
}

function suma() {
    let cadena = "2+2";
    let suma = eval(cadena);
    let p = document.createElement("p");
    let contenido = document.createTextNode(suma);
    p.appendChild(contenido);
    document.body.appendChild(p);
}