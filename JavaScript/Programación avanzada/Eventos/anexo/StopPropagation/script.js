window.onload = function() {
    stop();
}

function stop() {
    let c1 = document.getElementById("c1");
    let c2 = document.getElementById("c2");
    c1.addEventListener("click", function(event) {
        c2.textContent = "hello";
        event.stopPropagation();

        window.alert("event propagation halted")
    })
    let table = document.getElementById("t-daddy");
    table.addEventListener("click", function() {
        window.alert("Tabla")
    })
}