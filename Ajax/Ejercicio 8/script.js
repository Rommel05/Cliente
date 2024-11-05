window.onload = () => {
    let mostrar = document.getElementById("mostrar");
    mostrar.addEventListener("click", loadJson);
}

function loadJson() {
    let contenedor = document.getElementById("contenedor");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "libros.json", true);
    xhr.responseType = "json";
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let libros = xhr.response.libros;
            
            let ul = document.createElement("ul");
            for (let i = 0; i < libros.length; i++) {
                let titulo = libros[i].titulo;
                let autor = libros[i].autor;
                let publicacion = libros[i].anio_publicacion;
                let genero = libros[i].genero;
                let li = document.createElement("li");
                let content = document.createTextNode(titulo + "  " + autor + " " + publicacion + " " + genero);
                li.appendChild(content);
                ul.appendChild(li);
            }
            contenedor.appendChild(ul);
        }
    })

    xhr.send();
}