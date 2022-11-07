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
.catcfh(error => console.log(error.response))
