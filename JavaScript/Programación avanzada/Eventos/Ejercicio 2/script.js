window.onload = function() {
    /*let div = document.firstElementChild;
    let p = div.getElementsByTagName("p");
    for(let i = 0; i < p.length; i++) {
        p[i].addEventListener("mouseover", aumentarTamaño);
        p[i].addEventListener("mouseout", resetearTamaño);
    }*/
    let div = document.firstElementChild;
    let p = div.getElementsByTagName("p");
    for(let i = 0; i < p.length; i++) {
        p[i].onmouseover = aumentarTamaño;
        p[i].onmouseout = resetearTamaño;
    }
}

function aumentarTamaño() {
    this.style.fontSize = "16px";
}

function resetearTamaño() {
    this.style.fontSize = "12px";
}
