window.onload = function() {
    let mostrar = document.getElementById("mostrar");
    mostrar.addEventListener("click", showTxt);
}

function showTxt() {
    let contenedor = document.getElementById("contenedor");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'file.txt');

    xhr.addEventListener("readystatechange", function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //console.log("Activo")
            let p = document.createElement("p");
            let content = document.createTextNode(xhr.responseText);
            p.appendChild(content);
            contenedor.appendChild(p);
        }
    })

    xhr.send();
}
 
