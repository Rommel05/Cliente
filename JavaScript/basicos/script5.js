let precio = parseInt(prompt("Introduce el precio:"));
let iva = precio * 0.21;
let precioTotal = precio + iva;

alert("El precio base es :" + precio + '\n' + "El iva es : " + iva + '\n' + "El precio final es: " + precioTotal.toFixed(2));
