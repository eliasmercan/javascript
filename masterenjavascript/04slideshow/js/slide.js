// Objeto con propiedades del slide
var p={
    paginacion : document.querySelectorAll("#paginacion"),
    item: 0,
    cajaSlide: document.querySelector("#slide ul"),
    animacionSlide: "fade",
    imgSlide: document.querySelectorAll("#slide ul li"),
    avanzar: document.querySelector("#slide avanzar"),
    retroceder: document.querySelector("#slide retroceder"),
}
// Objeto con los metodos del slide
var m={
    inicioSlide: function(){
        for(var i=0; i < p.paginacion.length; i++){
            p.paginacion[i].addEventListener("click", m.paginacionSlide)
        }
        avanzar.addEventListener("click", m.avanzar)
        retroceder.addEventListener("click", m.retroceder)
    },

    paginacionSlide: function(item){
        p.item = item.target.parentNode.getAttribute("item")-1
        m.movimientoSlide(p.item)
    },

    avanzar: function(){
        //if ternario
        p.item == p.imgSlide.length-1 ? p.item=0 : p.item++
        console.log("p.item: ", p.item);
        m.movimientoSlide(p.item)
    },

    retroceder: function(){
        console.log("p.item-retroceder: ", p.item);
        p.item == 0 ? p.item= p.imgSlide.length-1 : p.item--
        console.log("p.item: ", p.item);
        m.movimientoSlide(p.item)
    },

    movimientoSlide: function(item){
        // alert("HOLA item "+ item)
        p.cajaSlide.style.left = item* -100 +"%"
        
        for(var i=0; i < p.paginacion.length; i++){
            p.paginacion[i].style.opacity = .5
        }

        p.paginacion[item].style.opacity = 1

        if(p.animacionSlide=="slide"){
            p.cajaSlide.style.transition =".7s left ease-in-out"
        }

        if(p.animacionSlide=="fade"){
        //    alert("fade")
            p.paginacion[item].style.opacity = 0
            p.paginacion[item].style.transition= ".7s left ease-in-out"
            setTimeout(function(){ p.paginacion[item].style.opacity = 1 }, 50)

        }

    }
}

m.inicioSlide()