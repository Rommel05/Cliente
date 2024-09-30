window.onload = function () {
    crearBoton();
}

function crearBoton() {
    let boton = document.createElement("button");
    let contenidoBoton = document.createTextNode("Fecha Actual");
    boton.appendChild(contenidoBoton);
    document.body.appendChild(boton);
    boton.addEventListener("click",fecha);
}

function fecha() {
    let fecha = new Date();
    
    let mes = fecha.getMonth();
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    let dia = fecha.getDay();
    let dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];


    let fechaP = document.createElement("p");
    let contenidoFecha = document.createTextNode(dias[dia] + ", " + fecha.getDate() + " de " + meses[mes] + " de " + fecha.getFullYear());
    fechaP.appendChild(contenidoFecha);
    document.body.appendChild(fechaP);
}