console.log("----------Ejercicio 05 Ciclos----------")
// CICLO FOR
var cajas = document.querySelectorAll(".cajas");

for(var i=0; i <= cajas.length; i++){
    cajas[i].style.width = "50px";
    cajas[i].style.height = "50px";
    cajas[i].style.background = "blue";
    cajas[i].style.marginTop= "5px"
    cajas[i].style.marginRight= "5px"
    cajas[i].style.display= "inline-block"
}

// CICLO while
var n= 1;

while(n <= 5){
    console.log("n ", n);
    n++;
}

// CICLO DO WHILE
var p = 1;
do {
    console.log("p ", p);
    p++;
}
while(p <= 5);
