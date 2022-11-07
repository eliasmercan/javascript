const app = document.getElementById("app")
const normal = document.getElementById("normal")
const promesa = document.getElementById("promesa")
const asyncawait = document.getElementById("asyncawait")
const btnFetch = document.getElementById("btnFetch")

const saludar = (name)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (name === ""){
                reject("El nombre no puede estar vacio")
            }else{
                resolve(`Hola ${name}`)
            }
        }, 2000)
    })
}

const write = (data) =>{
    app.innerText=data
}

normal.addEventListener("click", ()=>{
    console.log("Empieza el proceso")
    const resp = saludar("pedro")
    write(resp)
    console.log("Termina el proceso")
})

promesa.addEventListener("click", ()=>{
    console.log("Empieza el proceso")
    saludar("Edteam")
    .then(response => write(response))
    .catch(error => console.log(error))
    console.log("Termina el proceso")
})

asyncawait.addEventListener("click", async()=>{
    console.log("Empieza el proceso")
    try{
        const resp = await saludar("")
        write(resp)
    }catch(error){
        console.log(error)
    }
    console.log("Termina el proceso")
})

btnFetch.addEventListener("click", async()=>{
    /*Metodo tradicional de consultar una api con FECTH */
    // fetch("http://localhost:3000/posts")
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(err => console.log(err) )

    /* Metodo usando Asyn&Await*/
    try{
        const response = await fetch("http://localhost:3000/posts")
        const data = await response.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
})