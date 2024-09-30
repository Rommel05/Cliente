let number = parseInt(prompt("Introduce un número:"));
let esPar = true;

if (number % 2 != 0) {
    esPar = false;
}

if (esPar) {
    alert("Es par")
} else {
    alert("Es impar")
}

