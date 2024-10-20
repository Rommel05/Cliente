let cadena = prompt("Introduce una cadena");

let longitud = cadena.length;
document.write("<p>" + "la lomgitud de la cadena és: " + longitud + " carácteres" + "</p>" )

let cadenaUpper = cadena.toLocaleUpperCase();
document.write("<p>" + "La cadena en mayúsculas és: " + cadenaUpper + "</p>");

let cadenaLower = cadena.toLowerCase();
document.write("<p>" + "La cadena en minúsculas és: " + cadenaLower + "</p>");


let cadenaSeparada = cadena.split(" ");

document.write("Cadena normal:")

for (let i = 0; i < cadenaSeparada.length; i++) {
    document.write("<p>" + cadenaSeparada[i] + "<p>");
    document.write("<br>");
}

document.write("<br>");

document.write("Cadena al revés")
for (let i = (cadenaSeparada.length) - 1; i >= 0; i--) {
    document.write("<p>" + cadenaSeparada[i] + "<p>");
    document.write("<br>");
}