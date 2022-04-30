//Link de consulta basica
// const API_URL='https://api.thecatapi.com/v1/images/search'

// Link con datos adicionales a la ruta para obtener mas datos de la api
// query parameters

// Esta api se trabajara con Application-based authentication
//Adicionandole al parametro la api key obtenida registrandose
const API_URL='https://api.thecatapi.com/v1/images/search?limit=6&api_key=488e64e8-fe74-43c6-850f-0d6a5152ffa7'

const API_URL_FAVORITE='https://api.thecatapi.com/v1/images/favourites'



const spanError = document.getElementById('error');
// ------------------------------------------------------------------
// Status code 200 todo bien (resuestas satisfactorios)

// Status code 3xx el backend hace un redirect (no sabe que pasa pero se envia a otro lugar)
// 307 es un redirect es temporal
// 308 siempre que vengas aca siempre va a mandar a esta ruta

// Status code 4xx todo mal erores de conexion
// 401 no recibe informacion de esa ruta
// 404 no found - no se encuentra

//Status errores del servidor
// --------------------------------------------------------

async function loadRandomCats(){
    const res = await fetch(API_URL);
    const data = await res.json();

    if(res.status !== 200){
        spanError.innerHTML = 'Hubo un error API GENERAL: '+res.status+' '+data.message;

    }else{
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const img3 = document.getElementById('img3');
        const img4 = document.getElementById('img4');
        const img5 = document.getElementById('img5');
        const img6 = document.getElementById('img6');
        console.log(data);
        img1.src = data[0].url;
        img2.src = data[1].url;
        img3.src = data[2].url;
        img4.src = data[3].url;
        img5.src = data[4].url;
        img6.src = data[5].url;
    }
}

async function loadFavoriteCats(){
    const res = await fetch(API_URL_FAVORITE);
    const data = await res.json();

    if(res.status !== 200){
        spanError.innerHTML = 'Hubo un error API FAVORITE: ' + res.status +' '+data.message;
    }else{
        console.log('FAVORITOS: '+ data);
    }
}

async function saveFavorite(){
    const res = await fetch(API_URL_FAVORITE, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': '488e64e8-fe74-43c6-850f-0d6a5152ffa7'

        },
        body: JSON.stringify({
            image_id:'dje'
        })
    });
    const data = await res.json();

    if(res.status !== 200){
        spanError.innerHTML = 'Hubo un error API BOTON FAVORITE: ' + res.status +' '+data.message;
    }else{
        console.log('BOTON FAVORITOS: '+ data);
    }

    console.log(res)
    // const data = await res.json();
}

loadRandomCats();
loadFavoriteCats();