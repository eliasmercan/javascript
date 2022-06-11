console.log('----------Modulo 02 POO: 01 Clases---------- ')

/*Clases

Son fuciones constructoras y siempre las vamos a iniciar con Mayuscula.
Ejemplo: new String() <- Clases primitivas

*/

// Clases primitivas
//Clase String
var string = new String("Esto es un string");
console.log('string: ', string);

//Clase Number
var number = new Number(12);
console.log('number: ', number);

//Clase Boolean
var boolean = new Boolean(false);
console.log('boolean: ', boolean);

// Clases compuestas
// Clase array
var array = new Array("rojo", "amarillo", "verde");
console.log('array: ', array);

// Clase Object
var object = new Object({nombre:"pedro", edad:30});
console.log('object: ', object);

//Clases creada por programador
// Creamos el prototipo

function Persona(){
    // Propiedades publicas
    this.nombre;
    this.edad;
}

var yo = new Persona();
console.log('yo: ', yo);
yo.nombre="Juan";
yo.edad="21 Años";

//Clases con parametros
function Animales(nombre, raza){
    this.nombre = nombre;
    this.raza = raza;
}

var mascota = new Animales("Perro", "pitbul");
console.log('mascota: ', mascota);