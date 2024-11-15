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
        }
    })
}