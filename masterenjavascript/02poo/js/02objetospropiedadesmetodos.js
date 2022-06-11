console.log('----------Modulo 02 POO: 02 Objetos Propiedades y metodos---------- ')

/*Objetos: Es una Colección de propiedades y metodos

*/

var object = {
    /* Un propiedad es una asociacion entre un nombre y un valor*/
    nombre:"Juan",
    edad:31,

    /*El metodo es una funcion dentro de un objeto */
    descripcion: function(){
        console.log("Su nombre es "+ object.nombre+" y tiene "+object.edad+" años.")
    },

    saludar: function(saludo){
        console.log(saludo+" "+object.nombre)
    }
}

console.log('nombre: ',object.nombre)
console.log('nombre: ',object.edad)
object.descripcion()
object.saludar("Hola");

console.log("----------Objetos primitivos----------")
/* OBjetos primitivos */
// El objeto Date se utiliza para trabajar con fechas y horas.

var d = new Date()
console.log("d ",d);
var y = d.getFullYear()
console.log("y ",y);

