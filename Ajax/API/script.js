window.onload = () => {
    let numPersonajes = document.getElementById("numPersonajes");
    numPersonajes.addEventListener("click", totalPersonajes);

    let todosPersonajes = document.getElementById("todosPersonajes");
    todosPersonajes.addEventListener("click", personajes);
}

function totalPersonajes() {
    let contenedor = document.getElementById("contenedor");

    let img = document.createElement("img");
    img.setAttribute("src", "img/cargar.gif");
    img.setAttribute("alt", "gif carga");
    img.setAttribute("id", "gif")
    document.body.insertBefore(img, contenedor.nextSibling);

    let url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a1c05ccfdbdaa1c1053879ab2b6a0174&hash=a58bac7aaeb6864ce49bee26b31b1210`;
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.responseType = "json";


    xhr.addEventListener("readystatechange", () => {

        if (xhr.readyState === 4 && xhr.status === 200) {
            let img1 = document.getElementById("gif");
            document.body.removeChild(img1);

            let api = xhr.response;
            let resultados = api.data.results;
            let contador = 0;

            for (let i = 0; i < resultados.length; i++) {
                contador++;
            }

            if (contenedor.firstElementChild) {
                contenedor.removeChild(contenedor.firstElementChild);
                let p = document.createElement("p");
                let content = document.createTextNode(contador);
                p.appendChild(content);
                contenedor.appendChild(p);
            } else {
                let p = document.createElement("p");
                let content = document.createTextNode(contador);
                p.appendChild(content);
                contenedor.appendChild(p);
            }    
        }
    })

    xhr.send();
}

function personajes() {
    let contenedor = document.getElementById("contenedor");

    let img = document.createElement("img");
    img.setAttribute("src", "img/cargar.gif");
    img.setAttribute("alt", "gif carga");
    img.setAttribute("id", "gif")
    document.body.insertBefore(img, contenedor.nextSibling);

    let url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a1c05ccfdbdaa1c1053879ab2b6a0174&hash=a58bac7aaeb6864ce49bee26b31b1210`;
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.responseType = "json";

    xhr.addEventListener("readystatechange", () => {

        if (xhr.readyState === 4 && xhr.status === 200) {
            let img1 = document.getElementById("gif");
            document.body.removeChild(img1);

            let api = xhr.response;
            let resultados = api.data.results;
            

            if (contenedor.firstElementChild) {
                contenedor.removeChild(contenedor.firstElementChild);
                let ul = document.createElement("ul");
                for (let i = 0; i < resultados.length; i++) {
                    let nombre = resultados[i].name;
                    let li = document.createElement("li");
                    let content = document.createTextNode(nombre);
                    li.appendChild(content);
                    ul.appendChild(li);
                }
                contenedor.appendChild(ul);
            } else {
                let ul = document.createElement("ul");
                for (let i = 0; i < resultados.length; i++) {
                    let nombre = resultados[i].name;
                    let li = document.createElement("li");
                    let content = document.createTextNode(nombre);
                    li.appendChild(content);
                    ul.appendChild(li);
                }
                contenedor.appendChild(ul);
            }    
        }
    })

    xhr.send();
}
