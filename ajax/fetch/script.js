const btn = document.getElementById("btnLoad")
const dataContainer = document.getElementById("dataContainer")

btn.addEventListener("click", evt =>{
    fetch("http://127.0.0.1:8080/tabla.html")
    .then(response => response.text())
    .then(response =>{
        dataContainer.innerHTML = response
    })
    .catch(err => console.log(err))
})