window.onload = () => {
    let carga = document.getElementById("cargar");
    carga.addEventListener("click", logoCarga);
}

function logoCarga() {
    let contenedor = document.getElementById("contenedor");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'img/cargar.gif', true);
    xhr.responseType = "blob";

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 3) {
            let url = URL.createObjectURL(xhr.response);
            let img = document.createElement("img");
            img.setAttribute("src", url);
            img.setAttribute("alt", "Gif carga");
            img.setAttribute("id", "gif");
            contenedor.appendChild(img);
        }

        if (xhr.readyState === 4 && xhr.status === 200) {
            let gif = document.getElementById("gif");
            if (gif) {
                contenedor.removeChild(gif);
                let p = document.createElement("p");
                let content = document.createTextNode("Ha finalizado la carga de la página");
                p.appendChild(content);
                contenedor.appendChild(p);
            }
        } else {
            console.error("Error en la carga del GIF: " + xhr.status);        }
    })

    xhr.send();

}