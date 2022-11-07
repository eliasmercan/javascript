axios.get("http://localhost:3000/posts")
.then(response => console.log(response.data))
.catch(error => console.log(error.response))