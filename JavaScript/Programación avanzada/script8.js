window.onload = function() {
    url();
    pathname();
    protocolo();
    boton();
}

function url() {
    let p = document.createElement("p");
    let contenido = document.createTextNode("URL: " + window.location.href);
    p.style.fontWeight = "bold";
    p.appendChild(contenido);
    document.body.appendChild(p);
}

function pathname() {
    let p = document.createElement("p");
    let contenido = document.createTextNode("PATHNAME: " + window.location.pathname);
    p.style.fontWeight = "bold";
    p.appendChild(contenido);
    document.body.appendChild(p);
}

function protocolo() {
    let p = document.createElement("p");
    let contenido = document.createTextNode("PROTOCOLO: " + window.location.protocol);
    p.style.fontWeight = "bold";
    p.appendChild(contenido);
    document.body.appendChild(p);
}

function boton() {
    let boton = document.createElement("button");
    let contenido = document.createTextNode("Google");
    boton.appendChild(contenido);
    document.body.appendChild(boton);
    boton.addEventListener("click",
        function() {
            window.location.assign("https://www.google.com")
        }
    )
}