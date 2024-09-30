let suma = 0;
let counter = 0;

for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt("Introduce un número:"));
    suma += num;
    
    if (num > 100) {
        counter += 1;
    }
}

alert("La suma de estos números es " + suma + " y tiene " + counter + " mas mayores que 100");



