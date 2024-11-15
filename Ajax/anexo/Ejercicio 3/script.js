window.onload = () => {
    showBook();
}

function showBook() {
    let div = document.getElementById("contenedor");
    const xhr = new XMLHttpRequest();

    let form = document.getElementById("form");
    let inputs = form.getElementsByTagName("select");
    
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("change", () => {
            let id = inputs[i].value;
            div.innerHTML = "";
            if (id == "") {
                let p1 = document.createElement("p");
                let content1 = document.createTextNode("");
                p1.appendChild(content1);
                div.appendChild(p1);
            }
            
            xhr.open('POST','connection.php');
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.responseType = "text";

            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    div.innerHTML = xhr.response
                }
            })

            let datos = 'id='+ id
            xhr.send(datos);
        })

        
    }
    
    
    

    
}

