const myForm = document.getElementById("myForm")
const title = document.getElementById("title")
const author = document.getElementById("author")
const btnSave = document.getElementById("btnSave")

myForm.addEventListener("submit", (e)=>{
    e.preventDefault()
})

const makePost = () =>{
    return {
        title: title.value,
        author: author.value
    }
}
btnSave.addEventListener("click", async()=>{
    const data = makePost()
    try{
        const response = await axios({
            method: "post",
            url: "http://localhost:3000/posts",
            data: data
        })
        console.log(response)
    }catch(error){
        console.log(error)
    }
})

//Metodo sencilo de uso
// axios.get("http://localhost:3000/posts")
// .then(response => console.log(response.data))
// .catcfh(error => console.log(error.response))

//Metodo con objeto con configuracion
axios({
    url:"/posts",
    baseURL: "http://localhost:3000/",
    method: "get",
})
.then(response => console.log(response.data))
.catcfh(error => console.log(error))


