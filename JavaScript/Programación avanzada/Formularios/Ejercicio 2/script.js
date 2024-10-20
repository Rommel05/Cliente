window.onload = function() {
    color();
}

function color() {
    let form = document.body.firstElementChild;
    let select = form.getElementsByTagName("select");
    let p = document.getElementById("p1");
    p.style.fontWeight = "bold";
    p.style.fontSize = "20px";
    for(let i = 0; i < select.length; i++) {
        select[i].addEventListener("change", function() {
            let indiceSeleccionado = select[i].selectedIndex;
            let opcionSeleccionada = select[i].options[indiceSeleccionado];
            let valorSeleccionado = opcionSeleccionada.value;
            
            if (valorSeleccionado == "azul") {
                p.style.color = "blue";
            } else if (valorSeleccionado == "verde") {
                p.style.color = "green";
            } else if (valorSeleccionado == "rojo") {
                p.style.color = "red";
            }
        })
    }
}