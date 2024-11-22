window.onload = () => {
    let boton = document.getElementById("mostrar");
    boton.addEventListener("click", xml);
}

function xml() {
    let contenedor = document.getElementById("contenedor");
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'libros.xml');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let xml = xhr.responseXML;
            contenedor.innerHTML = "";

            let libros = xml.getElementsByTagName("libro");

            for(let i = 0; i < libros.length; i++) {
                let titulo = libros[i].getElementsByTagName("titulo")[0].textContent;
                let autor = libros[i].getElementsByTagName("autor")[0].textContent;
                let anio = libros[i].getElementsByTagName("anio_publicacion")[0].textContent;
                let genero = libros[i].getElementsByTagName("genero")[0].textContent;            

                let p = document.createElement("p");
                let content = document.createTextNode(titulo + " - " + autor + " - " + anio + " - " + genero)
                p.appendChild(content);
                contenedor.appendChild(p);
            }
        }
    })

    xhr.send("");
}