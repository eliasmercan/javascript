console.log("----------Ejercicio 07 Intervalos y Retardos de tiempo----------")
var tiempo = document.querySelector("#tiempo");
var segundo = 1;

// SET INVERVAL (INTERVALO DE TIEMPO)
// setInterval(funcion, tiempo)

var intervalo = setInterval(function(){
    tiempo.innerHTML = segundo++;
},1000);

// SET TIMEOUT (RETARDO DE TIEMPO)
// setInterval(funcion, tiempo)

setTimeout(function(){
    clearInterval(intervalo);
    // alert("Se cumplio el tiempo");
},5000);