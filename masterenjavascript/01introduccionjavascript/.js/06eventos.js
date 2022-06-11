console.log("----------Ejercicio 06 Eventos----------")
// Eventos desde el DOM
var recuadro = document.querySelector("#recuadro");

function cambiarColor(){
    recuadro.style.background = "blue";
}

// Eventos desde javascript
var boton = document.querySelector("#boton");
boton.addEventListener("click", moverCaja);

function moverCaja(){
    recuadro.style.width = "500px";
    recuadro.style.transition = "1s width ease";
}