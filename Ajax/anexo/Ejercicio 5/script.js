window.onload = () => {
    let mostrar = document.getElementById("mostrar");
    mostrar.addEventListener("click", json);
}

function json() {
    let contenedor = document.getElementById("contenedor");
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'libros.json');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.responseType = "json";

    xhr.addEventListener("readystatechange", () =>  {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let libros = xhr.response.libros;
            contenedor.innerHTML = "";

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

    xhr.send("");
}