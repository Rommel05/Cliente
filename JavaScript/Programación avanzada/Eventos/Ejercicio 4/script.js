window.onload = function() {
    aumentarTamaño();
    resetearTamaño();
}

function aumentarTamaño() {
    let div = document.firstElementChild;
    let p = div.getElementsByTagName("p");    

    for(let i = 0; i < p.length; i++) {

        if (p[i].addEventListener) {

            p[i].addEventListener("mouseover", function() {
                p[i].style.fontSize = "16px";
            });
            
        } else {

            p[i].attachEvent("mouseover", function() {
                p[i].style.fontSize = "16px";
            });
        }
    
    }
}

function resetearTamaño() {
    let div = document.firstElementChild;
    let p = div.getElementsByTagName("p");  

    for(let i = 0; i < p.length; i++) {

        if (p[i].addEventListener) {

            p[i].addEventListener("mouseout", function() {
                p[i].style.fontSize = "12px";
            });

        } else {

            p[i].attachEvent("mouseout", function() {
                p[i].style.fontSize = "12px";
            });
        }
    }
}