// Objeto con propiedades de la galeria
var pg={
    imgGaleria : document.querySelectorAll("#galeria ul li img"),
    rutaImagen: null,
    cuerpoDom: document.querySelector("body"),
    lightbox: null,
}

//Objeto con los metodos de la galeria
var mg={
    inicioGaleria: function(){
        for(var i = 0; i < pg.imgGaleria.length; i++){
            pg.imgGaleria[i].addEventListener("click", mg.capturaImagen)
        }
    },
    capturaImagen: function(img){
        pg.rutaImagen = img.target
        mg.lightbox(pg.rutaImagen)
        console.log("img", img.target)
    },

    lightbox: function(img){
        pg.cuerpoDom.appendChild(document.createElement("DIV").setAttribute("id", "lightbox"))
        pg.lightbox=document.querySelector("#lightbox")
    }
}

mg.inicioGaleria()