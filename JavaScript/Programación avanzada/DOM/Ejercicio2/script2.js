window.onload = function(){
    add();
    insert();
    replace();
    remove();
    clone();
    subListaDom();
    SubListaInner();
}

function add() {
    let add = document.getElementById("add");
    add.addEventListener("click", function(){
        let animal = window.prompt("Animal:")
        if  (animal.length !== 0) {
            let parentNode = document.getElementById("listaelemen");
            let li = document.createElement("li");
            let contenido = document.createTextNode(animal);
            li.appendChild(contenido);
            parentNode.appendChild(li);
        } else {
            window.alert("No poduedes añadir un elemento vacio");
        }
    })
}

function insert() {
    let insert = document.getElementById("insert");
    insert.addEventListener("click", function(){
        let animal = window.prompt("Animal:");
        if (animal.length !== 0) {
            let parentNode = document.getElementById("listaelemen");
            let li = document.createElement("li");
            let contenido = document.createTextNode(animal.toUpperCase());
            li.appendChild(contenido);
            parentNode.insertBefore(li,parentNode.lastChild.nextSibling);
        } else {
            window.alert("No se puede insertar un elemento vacio")
        }
    })
}

function replace() {
    let replace = document.getElementById("replace");
    replace.addEventListener("click", function(){
        let animal = window.prompt("Animal:");
        if (animal.length !== 0) {
            let parentNode = document.getElementById("listaelemen");
            let li = document.createElement("li");
            let contenido = document.createTextNode(animal.toUpperCase());
            li.appendChild(contenido);
            parentNode.replaceChild(li,parentNode.lastChild);
        } else {
            window.alert("No se puede remplazar el elemento por un valor vacio");
        }

    })
}

function remove() {
    let remove = document.getElementById("remove");
    remove.addEventListener("click", function(){
        let parentNode = document.getElementById("listaelemen");
        let childNode = parentNode.lastElementChild;
        let childs = document.getElementsByTagName("li");
        if (childs.length > 0) {
            parentNode.removeChild(childNode);
        } else {
            window.alert("La lista está vacia")
        }
        /*if (childNode) {
            parentNode.removeChild(childNode);
        } else {
            window.alert("No se puede borrar")
        }*/
    })
}

function clone() {
    let clone = document.getElementById("clone");
    clone.addEventListener("click", function(){
        let parentNode = document.getElementById("listaelemen");
        let listaCopia = parentNode.cloneNode(true);
        document.body.insertBefore(listaCopia, document.getElementById("botones"));
    })
}

function subListaDom() {
    let dom = document.getElementById("dom");
    dom.addEventListener("click", function(){
        let parentNode = document.getElementById("listaelemen");
        let firstChild = parentNode.firstElementChild;
        let sublista = firstChild.getElementsByTagName("ul")[0];
        if (!sublista) {
            let ul = document.createElement("ul");
            let li = document.createElement("li");
            let animal = window.prompt("Animal:");
            let contenido = document.createTextNode(animal);
            li.appendChild(contenido)
            ul.appendChild(li);
            firstChild.appendChild(ul);
        } else {
            let li = document.createElement("li");
            let animal = window.prompt("Animal:");
            let contenido = document.createTextNode(animal.toUpperCase());
            li.appendChild(contenido)
            sublista.appendChild(li);
        }
    })
}

function SubListaInner() {
    let inner = document.getElementById("inner");
    inner.addEventListener("click", function(){
        let parentNode = document.getElementById("listaelemen");
        let firstChild = parentNode.firstElementChild;
        let sublista = firstChild.getElementsByTagName("ul")[0];
        if (!sublista) {
            let animal = window.prompt("Animal:");
            firstChild.innerHTML += `<ul><li>${animal.toUpperCase()}</li></ul>`;
        } else {
            let animal = window.prompt("Animal:");
            sublista.innerHTML += `<li>${animal.toUpperCase()}</li>`;
        }
    })
}