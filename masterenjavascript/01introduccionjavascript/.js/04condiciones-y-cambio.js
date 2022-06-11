// CONDICIONES

var a = 5;
var b = 10;

if(a > b){
    console.log("a es mayor q b");
}else if(a == b ){
    console.log("a es lo mismo que b");
}else{
    console.log("a no es lo mismo q b, y a es menor que b");
}

// CAMBIOS
var dia="lunes";

switch(dia){
    case "sabado":
    console.log("voy a estudiar php");
    break;

    case "martes":
    console.log("voy a estudiar css");
    break;

    default: console.log("voy a estudiar javascript")
}