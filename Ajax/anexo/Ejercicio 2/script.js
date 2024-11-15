window.onload = () => {
    postPhp();
}

function postPhp() {
    let contenedor = document.getElementById("contenedor");
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'date.php');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.responseType = "text";

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let p = document.createElement("p");
            let content = document.createTextNode(xhr.response);
            p.appendChild(content);
            contenedor.appendChild(content);
        }
    })

    xhr.send();
}