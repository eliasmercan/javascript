// alert("incio js");

const ws = new WebSocket("ws://localhost:8080")

ws.addEventListener("open", (evt)=>{
    console.log("Estoy conectado")
})

ws.addEventListener("message", (evt)=>{
    console.log(`Recibido del servidor`)
    console.log(JSON.parse(evt.data))
})

ws.addEventListener("close", (evt)=>{
    console.log(`Desconectado por: ${evt.code}, ${evt.reason}`)
})


const boton= document.getElementById("btnSend")
const texto= document.getElementById("texto")
boton.addEventListener("click", (evt)=>{
    evt.preventDefault()
    const person = {
        name: "Elias",
        company: "AyudaTIC.xyz",
        isProfessor: true
    }
    // ws.send(texto.value)
    ws.send(JSON.stringify(person))
})

const close= document.getElementById("btncerrar")
close.addEventListener("click", (evt)=>{
    evt.preventDefault()
    ws.close()
})