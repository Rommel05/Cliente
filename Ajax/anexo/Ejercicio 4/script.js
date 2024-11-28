window.onload = () => {
    let boton = document.getElementById("mostrar");
    boton.addEventListener("click", xml);
}

function xml() {
    let contenedor = document.getElementById("contenedor");
    let xml = createXml();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'xml.php');
    xhr.setRequestHeader("Content-Type", "application/xml");

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

    xhr.send(xml);
}

function createXml() {
    let xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <libros>
        <libro>
            <titulo>El Alquimista</titulo>
            <autor>Paulo Coelho</autor>
            <anio_publicacion>1988</anio_publicacion>
            <genero>Ficción</genero>
        </libro>
        <libro>
            <titulo>Cien años de soledad</titulo>
            <autor>Gabriel García Márquez</autor>
            <anio_publicacion>1967</anio_publicacion>
            <genero>Realismo mágico</genero>
        </libro>
        <libro>
            <titulo>1984</titulo>
            <autor>George Orwell</autor>
            <anio_publicacion>1949</anio_publicacion>
            <genero>Distopía</genero>
        </libro>
        <libro>
            <titulo>El Señor de los Anillos</titulo>
            <autor>J.R.R. Tolkien</autor>
            <anio_publicacion>1954</anio_publicacion>
            <genero>Fantasía</genero>
        </libro>
        <libro>
            <titulo>Orgullo y prejuicio</titulo>
            <autor>Jane Austen</autor>
            <anio_publicacion>1813</anio_publicacion>
            <genero>Romance</genero>
        </libro>
    </libros>    
    `

    return xml;
}
