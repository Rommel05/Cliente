window.onload = function () {
    crearH1();
    crearP();
    setTimeout(continuar,1000);
}

function crearH1() {
    let h1 = document.createElement("h1");
    let contenido = document.createTextNode("Bienvenido a mi página");
    h1.appendChild(contenido);
    document.body.appendChild(h1);
}

function crearP() {
    let p = document.createElement("p");
    let contenidoP = document.createTextNode("Plataforma: " + navigator.userAgent);
    p.appendChild(contenidoP);
    document.body.appendChild(p);
}

function continuar() {
    let continuar = window.confirm("¿Quieres continuar?");

    if (continuar) {
        let p1 = document.createElement("p");
        let contenidoP1 = document.createTextNode("continuamos...");
        p1.appendChild(contenidoP1);
        document.body.appendChild(p1);
    }
}
