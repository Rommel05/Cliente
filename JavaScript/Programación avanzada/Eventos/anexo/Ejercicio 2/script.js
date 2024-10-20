window.onload = function() {
    link();
}

function link() {
    let a = document.createElement("a");
    let contenido = document.createTextNode("youtube");
    a.setAttribute("href","https://www.youtube.com/")
    a.appendChild(contenido);
    document.body.appendChild(a);

    a.addEventListener("click", function(event) {
        event.preventDefault();
    })
}