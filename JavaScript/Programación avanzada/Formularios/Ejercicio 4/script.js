window.onload = function() {
    let form = document.body.firstElementChild;
    let inputs = form.getElementsByTagName("input");
    let p = document.getElementById("p1");
    p.style.fontSize = "20px";
    /*negrita();
    cursiva();*/
    negrita(inputs,p);
    cursiva(inputs,p)

}

function negrita(inputs,p) {
    /*let form = document.body.firstElementChild;
    let inputs = form.getElementsByTagName("input");
    let p = document.getElementById("p1");*/

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name == "negrita") {
            inputs[i].addEventListener("change", function() {
                if(inputs[i].checked) {
                    p.style.fontWeight = "bold";
                } else {
                    p.style.fontWeight = "normal";
                }
            })
        }
    }
}

function cursiva(inputs,p) {
    /*let form = document.body.firstElementChild;
    let inputs = form.getElementsByTagName("input");
    let p = document.getElementById("p1");*/

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name == "cursiva") {
            inputs[i].addEventListener("change", function() {
                if(inputs[i].checked) {
                    p.style.fontStyle = "italic";
                } else {
                    p.style.fontStyle = "normal";
                }
            })
        }
    }
}