window.onload = function() {
    navegador();
}

function navegador() {
    if (window.navigator.userAgent.indexOf("MSIE") > -1 || window.navigator.userAgent.indexOf("Trident") > -1) {
        window.resizeTo(500,500);
    } else {
        let p = document.createElement("p");
        let contenido = document.createTextNode("Operación no permitida con este navegador");
        p.appendChild(contenido);
        document.body.appendChild(p);
    }
}