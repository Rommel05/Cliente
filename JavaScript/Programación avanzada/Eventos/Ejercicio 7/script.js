window.onload = function() {
    window.alert("Página que contiene un relog digital");
<<<<<<< HEAD
    setInterval(reloj, 1000);
}

window.onbeforeunload = function() {
    return "Página cancelada";
=======
    setInterval(reloj, 1000)
    window.addEventListener("beforeunload", function() {
    })
>>>>>>> efabff72f2360798dbfe4a53485629db103a3713
}

function reloj() {
    let fechaHora = new Date();
    let horas = fechaHora.getHours();
    let minutos = fechaHora.getMinutes();
    let segundos = fechaHora.getSeconds();

    if(horas < 10) { 
        horas = "0" + horas; 
    }

    if(minutos < 10) {
         minutos = "0" + minutos; 
    }

    if(segundos < 10) { 
        segundos = "0" + segundos; 
    }

    let divReloj = document.getElementById("reloj");
    let p = divReloj.getElementsByTagName("p");
    let contenido = document.createTextNode(horas + ":" + minutos + ":" + segundos);

    if (p.length == 0) {
        p = document.createElement("p");
        p.appendChild(contenido); 
        divReloj.appendChild(p); 
    } else {
        divReloj.firstElementChild.textContent = horas + ":" + minutos + ":" + segundos;
    }

}
