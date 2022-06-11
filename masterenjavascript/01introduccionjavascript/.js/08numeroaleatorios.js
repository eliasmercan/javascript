console.log("----------Ejercicio 08 Numero aleatorio----------")
var numeroAleatorio = document.querySelector("#numeroAleatorio");

/* Numeros aleatorios
El Objeto Math permite realizar tareas matematicas en los numeros.
Math.random = devulve un numero aleatorio entre 0 (incluye), y 1 (exclusivo)
Math.floor = redondea al numero menor del decimal
Math.ceil = redondea al numero mayor del decimal
Math.round = devuelve el valor de x redondeado a su numero entero mas proximo
*/

numero = Math.random();
numeroAleatorio.innerHTML = numero

