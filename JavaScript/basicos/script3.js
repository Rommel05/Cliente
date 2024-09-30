let mes = prompt("Introduce un mes");
switch (mes.toLowerCase()) {
    case "diciembre":
    case "enero":
    case "febrero":
        alert("Estamos en invierno");
        break;
    case "marzo":
    case "abril":
    case "mayo": 
        alert("Estamos en primavera primavero");
        break;
    case "junio":
    case "julio":
    case "agosto":
        alert("Estamos en verano");
        break;
    case "septiembre":
    case "octubre":
    case "noviembre":
        alert("Estamos en otoño");
        break;
    default: 
        alert("El mes que has introducido es incorrecto"); 
        break;
}