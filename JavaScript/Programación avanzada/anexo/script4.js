window.onload = function() {
    let numeroRandom = Math.round(Math.random() * 10) + 1;
    console.log(numeroRandom);

    let numero = parseInt(prompt("Introduce un número:"));

    if (numeroRandom == numero) {
        let p = document.createElement("p");
        let contenido = document.createTextNode("Felizidades has acertado")
        p.appendChild(contenido);
        document.body.appendChild(p);
    } else {
        let p = document.createElement("p");
        let contenido = document.createTextNode("Has fallado")
        p.appendChild(contenido);
        document.body.appendChild(p);
    }
    
}