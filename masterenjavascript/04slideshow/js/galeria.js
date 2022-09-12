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
        const div = document.createElement("div").setAttribute("id", "lightbox")
        pg.cuerpoDom.append(div)
        pg.lightbox=document.getElementById("lightbox")
        // pg.lightbox=document.querySelector("#lightbox")
        pg.lightbox.style.width = "100%"
        pg.lightbox.style.height = "100%"
        pg.lightbox.style.position = "fixed"
        pg.lightbox.style.zIndex = "10"
        pg.lightbox.style.background=rgba(0,0,0,.8);
        pg.lightbox.style.background=rgba(0,0,0,.8);
        pg.lightbox.style.top=0;
    }
}

mg.inicioGaleria()