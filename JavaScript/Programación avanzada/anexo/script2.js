window.onload = function () {
    formulario();
}

function formulario() {
    let form = document.createElement("form");
    form.setAttribute("action","");
    form.setAttribute("method","get");


    let lable = document.createElement("label");
    lable.setAttribute("for","dni");
    let contenidoLable = document.createTextNode("DNI");
    lable.appendChild(contenidoLable);
    form.appendChild(lable);

    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("name", "dni");
    form.appendChild(input);
    
    let boton = document.createElement("input");
    boton.setAttribute("type","button");
    boton.setAttribute("value","enviar");
    form.appendChild(boton);

    boton.addEventListener("click", function() {
        if (!input.value == "") {
            form.submit();
        } else {
            alert("No se puede enviar una cadena vacia");
        }
    })
    document.body.appendChild(form);





}
