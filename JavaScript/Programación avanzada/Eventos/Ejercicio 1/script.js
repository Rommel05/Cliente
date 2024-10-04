/*window.onload = function() {
    aumentarTamaño();
    resetearTamaño();
}

function aumentarTamaño() {
    let div = document.firstElementChild;
    let p = div.getElementsByTagName("p");
    for(let i = 0; i < p.length; i++) {
        p[i].addEventListener("mouseover", function() {
            this.style.fontSize = "16px";
        });
    }
}

function resetearTamaño() {
    let div = document.firstElementChild;
    let p = div.getElementsByTagName("p");
    for(let i = 0; i < p.length; i++) {
        p[i].addEventListener("mouseout", function() {
            this.style.fontSize = "12px";
        });
    }
}*/

function aumentarTamaño() {
    let div = document.firstElementChild;
    let p = div.getElementsByTagName("p");
    for(let i = 0; i < p.length; i++) {
        p[i].style.fontSize = "16px"
    }
}

function resetearTamaño() {
    let div = document.firstElementChild;
    let p = div.getElementsByTagName("p");
    for(let i = 0; i < p.length; i++) {
        p[i].style.fontSize = "12px"
    }
}
