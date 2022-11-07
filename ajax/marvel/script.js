const myForm = document.getElementById("myForm")
const startsWith = document.getElementById("startsWith")
const btnSearch = document.getElementById("btnSearch")
const myContent = document.getElementById("myContent")
const apiKey="77da0e786e9ccecf08381d332682fa4e"

myForm.addEventListener("click", e => e.preventDefault())

const draw = heroes => {
    myContent.innerText=""
    const fragment = document.createDocumentFragment()

    heroes.forEach(hero =>{
        const container = document.createElement('div')
        const title = document.createElement('h2')
        const image = document.createElement('img')

        title.textContent = hero.name
        image.src = `${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`
        container.appendChild(title)
        container.appendChild(image)
        fragment.appendChild(container)
    })
    myContent.appendChild(fragment)
}

btnSearch.addEventListener("click", async () => {
    const encodedName = encodeURI(startsWith.value)
    const marvelURL= `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${encodedName}&apikey=${apiKey}`
    const resp = await axios.get(marvelURL)
    draw(resp.data.data.results)
    console.log(resp.data.data.results)
});

