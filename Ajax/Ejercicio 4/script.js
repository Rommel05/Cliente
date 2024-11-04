window.onload = () => {
    let mostrar = document.getElementById("mostrar");
    mostrar.addEventListener("click", loadXml);
}

function loadXml() {
    let contenedor = document.getElementById("contenedor");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'libros.xml', true);
    //xhr.responseType = "document";

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let xml = xhr.responseXML;

            if(xml) {
                let ul = document.createElement("ul");
                let libros = xml.getElementsByTagName("libro");

                for (let i = 0; i < libros.length; i++) {
                    let li = document.createElement("li");
                    let titulo = libros[i].getElementsByTagName("titulo")[0].textContent;
                    let autor = libros[i].getElementsByTagName("autor")[0].textContent;
                    let publicacion = libros[i].getElementsByTagName("anio_publicacion")[0].textContent;
                    let genero = libros[i].getElementsByTagName("genero")[0].textContent;
                    let content = document.createTextNode(titulo + " " + autor + " " + publicacion + " " + genero);
                    li.appendChild(content);
                    ul.appendChild(li);
                }
                contenedor.appendChild(ul);   
            }
        }
    })

    xhr.send();
}