window.onload = function() {
    fotos();
    links();
}
function fotos() {
    let boton = document.getElementById("botonFotos");
    boton.addEventListener("click", function(){
        let parentNode = document.getElementById('img');
        let imagenes = parentNode.getElementsByTagName('img');
        let p = document.createElement('p');
        let contenido = document.createTextNode("Hay: " + imagenes.length + " imágenes");
        p.appendChild(contenido);
        document.body.appendChild(p);
    })
}

function links() {
    let botonLink = document.getElementById("botonLinks");
    botonLink.addEventListener("click", function(){
        let parentNode = document.getElementById('links');
        let links = parentNode.getElementsByTagName('a');
        let p = document.createElement('p');
        let contenido = document.createTextNode("Hay: " + links.length + " links");
        p.appendChild(contenido);
        document.body.appendChild(p);
    })
}