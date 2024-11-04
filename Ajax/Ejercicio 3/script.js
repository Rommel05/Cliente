window.onload = () => {
    let change = document.getElementById("change");
    change.addEventListener("click", changeImage);
}

function changeImage() {
    let contenedor = document.getElementById("contenedor");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "img/image2.jpg", true);
    xhr.responseType = "blob";
    
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let img = document.getElementById("image");
            let url = URL.createObjectURL(xhr.response);
            img.setAttribute("src", url);        }
    })

    xhr.send();
}