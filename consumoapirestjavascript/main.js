//Link de consulta basica
// const API_URL='https://api.thecatapi.com/v1/images/search'

// Link con datos adicionales a la ruta para obtener mas datos de la api
// query parameters

// Esta api se trabajara con Application-based authentication
//Adicionandole al parametro la api key obtenida registrandose
const API_KEY = '488e64e8-fe74-43c6-850f-0d6a5152ffa7';

const API_URL='https://api.thecatapi.com/v1/images/search?limit=6'

// const API_URL_FAVORITE='https://api.thecatapi.com/v1/favourites?api_key=488e64e8-fe74-43c6-850f-0d6a5152ffa7'
const API_URL_FAVORITE='https://api.thecatapi.com/v1/favourites'

const API_URL_FAVORITE_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}`



const spanError = document.getElementById('error');

const tiempo = document.getElementById('tiempo');
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
    const res = await fetch(API_URL,{
        method: 'GET',
        headers: {
            'x-api-key': API_KEY,
        },
    });
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

        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
        const btn3 = document.getElementById('btn3');
        const btn4 = document.getElementById('btn4');
        const btn5 = document.getElementById('btn5');
        const btn6 = document.getElementById('btn6');

        console.log(data);
        img1.src = data[0].url;
        img2.src = data[1].url;
        img3.src = data[2].url;
        img4.src = data[3].url;
        img5.src = data[4].url;
        img6.src = data[5].url;

        btn1.onclick = () => saveFavorite(data[0].id);
        btn2.onclick = () => saveFavorite(data[1].id);
        btn3.onclick = () => saveFavorite(data[2].id);
        btn4.onclick = () => saveFavorite(data[3].id);
        btn5.onclick = () => saveFavorite(data[4].id);
        btn6.onclick = () => saveFavorite(data[5].id);

        visibleSpiner();

        const myTimeout = setTimeout(invisibleSpiner, 3000);

    }
}

async function loadFavoriteCats(){
    const res = await fetch(API_URL_FAVORITE, {
        method: 'GET',
        headers: {
            'x-api-key': API_KEY,
        },
    });
    const data = await res.json();

    if(res.status !== 200){
        spanError.innerHTML = 'Hubo un error API FAVORITE: ' + res.status +' '+data.message;
    }else{
        const sectionFavorite = document.getElementById('favoritos');
        sectionFavorite.innerHTML = "";

        const h2 = document.createElement('h2');
        h2.innerHTML = "Gatos Favoritos";

        sectionFavorite.appendChild(h2);

        data.forEach(cat => {
            //Construyendo la vista aleatoria para los favoritos

            const divFavorite = document.createElement('div');
            divFavorite.className = 'col-6 col-sm-6 col-md-6 col-lg-4 pepo';
            
            const divCard = document.createElement('div')
            divCard.className = 'card bg-dark text-white';
            
            const imgFavorite = document.createElement('img');
            imgFavorite.className = 'card-img imgFavorites';
            imgFavorite.src = cat.image.url

            const overlayFavorite = document.createElement('div');
            overlayFavorite.className = 'card-img-overlay';

            const buttonFavorite = document.createElement('button');
            buttonFavorite.className = 'btn btn-sm btn-danger position-absolute bottom-0 end-0';
            const btnText = document.createTextNode('Quitar');
            buttonFavorite.onclick = () => deleteFavoriteCat(cat.id);

            buttonFavorite.appendChild(btnText);
            overlayFavorite.appendChild(buttonFavorite);
            divCard.appendChild(imgFavorite);
            divCard.appendChild(overlayFavorite);
            divFavorite.appendChild(divCard);
            sectionFavorite.appendChild(divFavorite)

        } );
    }
}

async function saveFavorite(id){
    const res = await fetch(API_URL_FAVORITE, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
        },
        body: JSON.stringify({
            'image_id': id,
        })
    });
    const data = await res.json();

    if(res.status !== 200){
        spanError.innerHTML = 'Hubo un error API BOTON FAVORITE: ' + res.status +' '+data.message;
    }else{
        console.log('BOTON FAVORITOS: '+ data);

        // if (res.status == 400){
        //     Swal.fire({
        //         position: 'center',
        //         icon: 'error',
        //         title: 'Ya fue eliminado la imagen de favoritos',
        //         showConfirmButton: false,
        //         timer: 1500
        //       })
        //       exit();
        // }


        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregado a favoritos con exito',
            showConfirmButton: false,
            timer: 1000
          })

          loadFavoriteCats();
    }

    console.log(res)
    // const data = await res.json();
}

async function deleteFavoriteCat(id){
    const res = await fetch(API_URL_FAVORITE_DELETE(id), {
        method: 'DELETE',
        headers: {
            'x-api-key': API_KEY,
        },
    });
    const data = await res.json();

    if(res.status !== 200){
        spanError.innerHTML = 'Hubo un error API BOTON DELETE: ' + res.status +' '+data.message;
    }else{
        loadFavoriteCats();
        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Imagen eliminada de favoritos',
            showConfirmButton: false,
            timer: 1000
          });

          
    }

}

function visibleSpiner(){
    tiempo.className = 'spinner-border text-info visible';
}

function invisibleSpiner(){
    tiempo.className = 'spinner-border text-info invisible';
}

loadRandomCats();
loadFavoriteCats();