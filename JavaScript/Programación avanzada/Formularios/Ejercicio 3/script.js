window.onload = function() {
    color();
}

function color() {
    let form = document.body.firstElementChild;
    let inputs = form.getElementsByTagName("input");
    let p = document.getElementById("p1");
    p.style.fontWeight = "bold";
    p.style.fontSize = "20px";

    for (let i = 0; i < inputs.length; i++) {
        /*if (inputs[i].type == "radio") {
            inputs[i].addEventListener("change", function() {
                if (inputs[i].value == "azul") {
                    p.style.color = "blue";
                } else if (inputs[i].value == "verde") {
                    p.style.color = "green";
                } else if (inputs[i].value == "rojo") {
                    p.style.color = "red";
                }
            })
        }*/

        if (inputs[i].type == "radio") {
            inputs[i].addEventListener("change", function() {
                p.style.color = inputs[i].value;
            })
        }
    }
}