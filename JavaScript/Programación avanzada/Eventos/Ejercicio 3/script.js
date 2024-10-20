window.onload = function() {
    let div = document.firstElementChild;
    let p = div.getElementsByTagName("p");
    for(let i = 0; i < p.length; i++) {
        p[i].addEventListener("mouseover", aumentarTamaño);
        p[i].addEventListener("mouseout", resetearTamaño);
    }
}

function aumentarTamaño(event) {
    event.target.style.fontSize = "16px";
}

function resetearTamaño(event) {
    event.target.style.fontSize = "12px";
}