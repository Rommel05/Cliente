window.onload = () => {
    let carga = document.getElementById("cargar");
    carga.addEventListener("click", logoCarga);
}

function logoCarga() {
    let contenedor = document.getElementById("contenedor");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'date.php', true);
    xhr.responseType = "text";

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 3) {
            let img = document.createElement("img");
            img.setAttribute("src", "img/cargar.gif");
            img.setAttribute("alt", "Gif carga");
            img.setAttribute("id", "gif");
            contenedor.appendChild(img);
        }

        if (xhr.readyState === 4 && xhr.status === 200) {
            let gif = document.getElementById("gif");
            setTimeout(() => {
                if (gif) {
                    contenedor.removeChild(gif);
                    let p = document.createElement("p");
                    let content = document.createTextNode(xhr.response);
                    p.appendChild(content);
                    contenedor.appendChild(p);
                }
            }, 2000)
            
        }
    })

    xhr.send();

}