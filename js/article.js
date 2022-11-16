
import environment from "./enviroment.js";

const urlColeccion = environment.urlDb + '/articles.json';

const cover_image   = document.getElementById('createImage__post');
/*-----Traer boton Enviar ---*/
const formArticle   = document.getElementById('article-form');
const enviar        = document.getElementById('article_main__createPost-submit');

const prevImagen    =   document.getElementById('imagePrev');


const date          = new Date();
const day           = date.getDate();
const month         = date.getMonth();
const year          = date.getFullYear();

/*=======================================
CARGAR IMAGEN
=======================================*/
cover_image.addEventListener("change",() => {
    console.log("prepara imagen");
    const archivoImg = cover_image.files;
    if(!archivoImg || !archivoImg.length){
        prevImagen.src = "";
        return;
    }
    const archUno = archivoImg[0];
    const objectURL = URL.createObjectURL(archUno);
    prevImagen.src = objectURL;
})

/*=======================================
CRUD POST (Crear Post - method: 'POST')
=======================================*/

formArticle.addEventListener('submit',(e) =>{
    e.preventDefault();
    /*Leer titulo,fecha,contenido*/
    const titlePost     = formArticle['createInput__text'].value;
    const contenidoPost = formArticle['createInput__text-p'].value;
    const fechaPost     = date;

    const datosPost = {
        title       : titlePost,
        parrafo     : contenidoPost,
        fecha       : fechaPost,
        cover_image : "data:image/jpeg;base64,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"
    }

    fetch(urlColeccion,{
        method: 'POST',
        body: JSON.stringify(datosPost),
        headers: {
        'Content-Type': 'application/json'
        }})
        .then(resp => resp.json())
        .then(data => {
            
            console.log(data);
        })
        .catch(error => console.log(error));
})



