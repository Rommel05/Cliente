window.onload = function () {
    totalEnlaces();
    refEnlaces();
    refEnlacesPorParrafos();
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
        let tile = document.createElement("h3");
        let content = document.createTextNode("Links")
        tile.appendChild(content);
        document.body.appendChild(tile);

        let ul = document.createElement("ul");

        let links = document.getElementsByTagName("a");

        let uniqueLinks = [];

        for (let i = 0; i < links.length; i++) {
            let href = links[i].getAttribute("href");
            if (!uniqueLinks.includes(href)) {
                uniqueLinks.push(href);
                let li = document.createElement("li");
                let contenido = document.createTextNode(href);
                li.appendChild(contenido);
                ul.appendChild(li);
            }
        }
        document.body.appendChild(ul);
        
    })
}


function refEnlacesPorParrafos() {
    let boton = document.getElementsByTagName("button")[2];
    boton.addEventListener("click", function() {
        let p = document.getElementsByTagName("p");
        let parrafos = p.length
        for(let i = 0; i < parrafos; i++) {
            let title = document.createElement("h3");
            let content = document.createTextNode("Párrafo " + (i + 1));
            title.appendChild(content);
            document.body.appendChild(title);

            let ul = document.createElement("ul");

            let links = p[i].getElementsByTagName("a");
            for (let j = 0; j < links.length; j++) {
                let li = document.createElement("li");
                let contenido = document.createTextNode(links[j].getAttribute("href"));
                li.appendChild(contenido);
                ul.appendChild(li);
            }
            document.body.appendChild(ul);
        }
    })
}