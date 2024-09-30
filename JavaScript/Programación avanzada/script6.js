window.onload = function () {
    boton();
}

function boton() {
    let boton = document.createElement("button");
    let contenidoBoton = document.createTextNode("Hora Actua");
    boton.appendChild(contenidoBoton);
    document.body.appendChild(boton);
    boton.addEventListener("click",hora);
}

function hora() {
    let fecha = new Date();
    
    let horas = fecha.getHours();
    if (horas < 10) {
        horas = "0" + fecha.getHours();
    }

    let minutos = fecha.getMinutes();
    if (minutos < 10) {
        minutos = "0" + fecha.getMinutes();
    }

    let horaP = document.createElement("p");

    if (horas < 14) {
        let horaContenido = document.createTextNode("Buenos días, son las " + horas + ":" + minutos);
        horaP.appendChild(horaContenido);
    } else if (horas < 20) {
        let horaContenido = document.createTextNode("Buenas tardes, son las " + horas + ":" + minutos);
        horaP.appendChild(horaContenido);
    } else {
        let horaContenido = document.createTextNode("Buenas noches, son las " + horas + ":" + minutos);
        horaP.appendChild(horaContenido);
    }

    document.body.appendChild(horaP);
}