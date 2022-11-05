const btn = document.getElementById("btnLoad")
const dataContainer = document.getElementById("dataContainer")

btn.addEventListener("click", evt =>{
    const xhr = new XMLHttpRequest()
    //la funcion open recibe 3 parametros:
    //1. metodo
    //2. direccion del servidor
    //3. Si el metodo es asincrono "True"
    xhr.open("GET", "http://localhost:8080/tabla.html", true)

    //Que debe hacer?
    xhr.addEventListener("load", e=>{
        dataContainer.innerHTML = e.target.responseText
    })

    //Ejecutamos la petición
    xhr.send(null)
})