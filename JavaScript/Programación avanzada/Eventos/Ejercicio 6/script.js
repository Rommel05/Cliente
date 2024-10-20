window.onload = function() {
    boton(5);
};

function boton(iteraciones) {
    for (let i = 0; i < iteraciones; i++) {
        let boton = document.createElement("button")
        let content = document.createTextNode("Click")
        boton.appendChild(content);
        document.body.appendChild(boton)
        boton.addEventListener("click", function() {
            window.alert("Has pulsado sobre un botón")
        })
    }
}