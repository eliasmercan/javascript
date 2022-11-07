const app = document.getElementById("app")
const normal = document.getElementById("normal")
const promesa = document.getElementById("promesa")
const asyncawait = document.getElementById("asyncawait")

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