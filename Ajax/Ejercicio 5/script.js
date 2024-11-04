window.onload = () => {
    let ejecutar = document.getElementById("ejecutar");
    ejecutar.addEventListener("click", loadScript);
}

function loadScript() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'script1.js', true);
    xhr.responseType = "text";

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            eval(xhr.response);
        }
    })

    xhr.send();
}