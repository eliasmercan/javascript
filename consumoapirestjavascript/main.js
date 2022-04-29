console.log('hello world')

//Link de consulta basica
// const API_URL='https://api.thecatapi.com/v1/images/search'

// Link con datos adicionales a la ruta para obtener mas datos de la api
// query parameters

// Esta api se trabajara con Application-based authentication
//Adicionandole al parametro la api key obtenida registrandose
const API_URL='https://api.thecatapi.com/v1/images/search?limit=3&api_key=488e64e8-fe74-43c6-850f-0d6a5152ffa7'


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



async function reload(){
    const res = await fetch(API_URL);
    const data = await res.json();
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    console.log(data);
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
}

reload();