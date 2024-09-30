window.onload = function () {
    totalEnlaces();
    refEnlaces();
}

function totalEnlaces() {
    let boton = document.getElementsByTagName("button")[0];
    boton.addEventListener("click", function() {
        let enlaces = document.getElementsByTagName("a");
        let p = document.createElement("p");
        let contenido = document.createTextNode(enlaces.length);
        p.appendChild(contenido);
        document.body.appendChild(p);
    });
}

function refEnlaces() {
    let boton = document.getElementsByTagName("button")[1];
    boton.addEventListener("click", function() {
        for (let i = 0; i < 3; i++) {
            let title = document.createElement("p");
            let contenidoTitle = document.createTextNode("Párrafo " + (i + 1));
            title.appendChild(contenidoTitle);
            document.body.appendChild(title);
            
            let ul = document.createElement("ul");
            let p = document.getElementsByTagName("p")[i];
            let links = p.getElementsByTagName("a");
            for (let j = 0; j < links.length; j++) {
                let link = links[j];
                let li = document.createElement("li");
                let contenido = document.createTextNode(link.getAttribute("href"));
                li.appendChild(contenido);
                ul.appendChild(li);
            }
            document.body.appendChild(ul);
        }
    })
}