// FUNCIONES SIN PARAMETROS

// Declaramos la funcion
function saludo(){
    console.log("hola");
}

// Ejecutamos la funcion
saludo();

// FUNCIONES CON PARAMETROS

function operacion(digito1, digito2){
    var resultado = digito1 + digito2;
    console.log("resultado ", resultado);
}

operacion(1, 2);

// FUNCIONES CON RETORNO SIN PARAMETROS

function retorno1(){
    var numero = 5;
    return numero;
}

console.log(retorno1());

// FUNCIONES CON RETORNO CON PARAMETROS

function retorno2(numero){
    return numero;
}

console.log(retorno2(true))
