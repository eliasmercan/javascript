console.log("----------Ejercicio 02 Variables----------")
var numero = 25
console.log("Numero: ", numero);

var palabra = "palabras"
console.log("Palabra: ", palabra);

var booleana = true
console.log("Boleana: ", booleana);

var colores = ["rojo", "amarillo"]
console.log("Colores: ", colores[0]);

var jugo = {"ingrediente1:": "fresa",
            "ingrediente2":"mandarina",
            "ingrediente3":"banano" }
console.log("jugo: ", jugo.ingrediente1)

var caja = document.querySelector("#caja");
console.log("caja ", caja);

caja.style.width = "200px"
caja.style.height = "200px"
caja.style.background = "red"

var cajas = document.querySelectorAll(".cajas");
console.log("cajas ", cajas);