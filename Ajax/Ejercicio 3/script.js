window.onload = () => {
    let change = document.getElementById("change");
    change.addEventListener("click", changeImage);
}

let images = ["img/foto2.jpeg", "img/foto3.jpg", "img/foto4.jpeg", "img/foto1.jpeg"];

function changeImage() {
    let image = images.shift();
    images.push(image);
    let xhr = new XMLHttpRequest();
    xhr.open("GET", image, true);
    xhr.responseType = "blob";
    
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let img = document.getElementById("image");
            let url = URL.createObjectURL(xhr.response);
            img.setAttribute("src", url);        }
    })

    xhr.send();
}