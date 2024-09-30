window,onload = function() {
    formulario();
}

function formulario() {
    let form = document.createElement("form");
    form.setAttribute("action","");
    form.setAttribute("method","get");

    let cajaTexto = document.createElement("input");
    cajaTexto.setAttribute("type","text");
    cajaTexto.setAttribute("name","caja");
    cajaTexto.setAttribute("value","0");
    form.appendChild(cajaTexto);

    let sumar = document.createElement("input");
    sumar.setAttribute("type","button");
    sumar.setAttribute("value","SUMAR")
    form.appendChild(sumar);

    sumar.addEventListener("click", function() {
        let suma = parseInt(cajaTexto.getAttribute("value")); 
        suma += 10;
        cajaTexto.setAttribute("value",suma);
    })

    let reset = document.createElement("input");
    reset.setAttribute("type","reset");
    reset.setAttribute("value","RESET");
    form.appendChild(reset);

    reset.addEventListener("click", function() {
        cajaTexto.setAttribute("value","0");
    } )
    document.body.appendChild(form);
}