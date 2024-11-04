window.onload = function() {
    let inicio = document.getElementById("inicio");
    inicio.addEventListener("click", cargarInicio);

    let bienvenida = document.getElementById("bienvenido");
    bienvenida.addEventListener("click", cargarBienvenida);

    let google = document.getElementById("google");
}

function cargarInicio() {
    let contenedor = document.getElementById("contenedor");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "inicio.html", true);

    xhr.responseType = "text";
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            contenedor.innerHTML = xhr.response;
            console.log(xhr.status);
        }
    })

    xhr.send();
}

function cargarBienvenida() {
    let contenedor = document.getElementById("contenedor");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "bienvenida.html", true);

    xhr.responseType = "text";
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            contenedor.innerHTML = xhr.response;
            console.log(xhr.status);
        }
    })

    xhr.send();
}