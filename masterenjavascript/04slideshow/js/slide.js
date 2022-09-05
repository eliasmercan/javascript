// Objeto con propiedades del slide
var p={
    paginacion : document.querySelectorAll("#paginacion"),
    item: 0,
    cajaSlide: document.querySelector("#slide ul"),
    animacionSlide: "fade",
    imgSlide: document.querySelectorAll("#slide ul li"),
    avanzar: document.querySelector("#slide #avanzar"),
    retroceder: document.querySelector("#slide #retroceder"),
    velocidadSlide: 3000,
    formatearLoop: false
}
// Objeto con los metodos del slide
var m={
    inicioSlide: function(){
        for(var i=0; i < p.paginacion.length; i++){
            p.paginacion[i].addEventListener("click", m.paginacionSlide)
        }
        avanzar.addEventListener("click", m.avanzar)
        retroceder.addEventListener("click", m.retroceder)
        m.intervalo()
    },

    paginacionSlide: function(item){
        p.item = item.target.parentNode.getAttribute("item")-1
        m.movimientoSlide(p.item)
    },

    avanzar: function(){
        //if ternario
        p.item == p.imgSlide.length-1 ? p.item=0 : p.item++
        m.movimientoSlide(p.item)
    },

    retroceder: function(){
        p.item == 0 ? p.item= p.imgSlide.length-1 : p.item--
        m.movimientoSlide(p.item)
    },

    movimientoSlide: function(item){
        // alert("HOLA item "+ item)

        p.formatearLoop = true

        p.cajaSlide.style.left = item* -100 +"%"
        
        for(var i=0; i < p.paginacion.length; i++){
            p.paginacion[i].style.opacity = .5
        }

        p.paginacion[item].style.opacity = 1

        if(p.animacionSlide=="slide"){
            p.cajaSlide.style.transition =".7s left ease-in-out"
        }

        if(p.animacionSlide=="fade"){
            p.paginacion[item].style.opacity = 0
            p.paginacion[item].style.transition= ".7s left ease-in-out"
            setTimeout(function(){ p.paginacion[item].style.opacity = 1 }, 50)
        }
    },

    intervalo: function(){
        setInterval(function(){
            //if ternario
            p.formatearLoop ? p.formatearLoop=false : m.avanzar()
        }, p.velocidadSlide)
    }

}

m.inicioSlide()