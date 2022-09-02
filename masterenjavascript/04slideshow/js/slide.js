// Objeto con propiedades del slide
var p={
    paginacion : document.querySelectorAll("#paginacion"),
    item: 0,
    cajaSlide: document.querySelector("#slide ul"),
    animacionSlide: "fade",
    imgSlide: document.querySelector("#slide ul li")
}
// Objeto con los metodos del slide
var m={
    inicioSlide: function(){
        for(var i=0; i < p.paginacion.length; i++){
            p.paginacion[i].addEventListener("click", m.paginacionSlide)
        }
    },

    paginacionSlide: function(item){
        p.item = item.target.parentNode.getAttribute("item")-1
        m.movimientoSlide(p.item)
    },

    movimientoSlide: function(item){
        alert("HOLA item "+ item)
        p.cajaSlide.style.left = item* -100 +"%"
        
        for(var i=0; i < p.paginacion.length; i++){
            p.paginacion[i].style.opacity = .5
        }

        p.paginacion[item].style.opacity = 1

        if(p.animacionSlide=="slide"){
            p.cajaSlide.style.transition =".7s left ease-in-out"
        }

        if(p.animacionSlide=="fade"){
            alert("fade")
            for(var i=0; i < p.imgSlide.length; i++){
                p.paginacion[i].style.opacity = 0
            }
        }

    }
}

m.inicioSlide()