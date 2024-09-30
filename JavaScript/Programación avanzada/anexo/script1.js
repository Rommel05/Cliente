window.onload = function () {
    hipervinculo();
}

function hipervinculo() {
    let a = document.createElement("a");
    a.setAttribute("href","https://www.google.com")
    let contenido = document.createTextNode("Google");
    a.appendChild(contenido);
    document.body.appendChild(a);

    a.addEventListener("mouseover", function () {
        window.alert("Estás encima de un hipervinculo.")

    })

}