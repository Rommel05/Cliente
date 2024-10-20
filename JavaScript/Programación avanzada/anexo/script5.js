window.onload = function() {
    mensaje();
    setTimeout(popUp,20000)
}

function mensaje() {
    let p = document.createElement("p");
    let contenido = document.createTextNode("Bienvenido");
    p.appendChild(contenido);
    document.body.appendChild(p);
}

function popUp() {
    window.open("","","width=300px,height=300px");
}