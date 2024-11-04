window.onload = () => {
    let ejecutar = document.getElementById("ejecutar");
    ejecutar.addEventListener("click", loadPhp);
}

function loadPhp() {
    let contenedor = document.getElementById("contenedor");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'date.php', true);

    xhr.responseType = "text";

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let p = document.createElement("p");
            let content = document.createTextNode(xhr.response);
            p.appendChild(content);
            contenedor.appendChild(p); 
        }
    })

    xhr.send();
}