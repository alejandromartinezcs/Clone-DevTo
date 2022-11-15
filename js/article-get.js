import environment from "./enviroment.js";
const urlColeccion = environment.urlDb + '/articles.json';

const divarticle   =   document.getElementById('container-article');
const cover_image   = document.getElementById('createImage__post');
const title         = document.getElementById('createInput__text');
const tags          = document.getElementById('createInput__text-tags');
const parrafo       = document.getElementById('createInput__text-p');
const formArticle   = document.getElementById('article-form');
const enviar        = document.getElementById('article_main__createPost-submit');



/*=======================================
CRUD POST (Leer Post - method: 'GET')
=======================================*/
function LeerPost(){
    
    fetch(urlColeccion,{
        method: 'GET'
    })
    .then(resp => resp.json())
    .then(data => {console.log(data)
        const keys = Object.keys(data);
        // por cada key me tendría que traerme todos los 
        keys.forEach(element => {
            let titulo  = data[element].title;
            let parrafo = data[element].parrafo;
            let image   = data[element].cover_image;
            let tags    = data[element].tags;
            let fecha   = data[element].fecha;

            const editar            =   document.createElement('button');
            editar.classList.add("btn","btn-primary");
            editar.innerText = "Editar";
            const articletitle      =   document.createElement('article');
            articletitle.innerText  =   titulo;
            const articledate       =   document.createElement('article');
            articledate.innerText   =   fecha;  
            const articledesc       =   document.createElement('article');
            articledesc.innerText   =   parrafo;
                
            divarticle.appendChild(articletitle);
            divarticle.appendChild(articledate);
            divarticle.appendChild(articledesc);
            divarticle.appendChild(editar);
            console.log(titulo)
            console.log(parrafo)
            console.log(fecha)

            editar.addEventListener('click',(element) =>{
                console.log("Voy editar el post");
                // const anchorActualiza = document.createElement("a");
                // anchorActualiza.a 
                const titlePost     = formArticle['createInput__text'].value;
                const contenidoPost = formArticle['createInput__text-p'].value;
                const fechaPost     = date;
                
                const datosActualizar = {
                    title: titulo,
                    pararafo: parrafo,
                    fecha: fecha,
                    cover_image: image,
                }

                fetch(urlColeccion,{
                    method: 'PUT',
                    body: JSON.stringify(datosPost),
                    headers: {
                    'Content-Type': 'application/json'
                    }})
                    .then(resp => resp.json())
                    .then(data => {console.log(data);})
                .catch(error => console.log(error));
            })
        });   
    })
    .catch(error => console.log(error))
}
LeerPost();

/*=========================================
CRUD POST (Actualizar Post - method: 'PUT')
=========================================*/
/*FALTA CREAR BOTON EDITAR EN EL POST"*/


/*=========================================
CRUD POST (Borrar Post - method: 'DELETE')
=========================================*/
/*FALTA CREAR BOTON BORRAR EN EL POST */
borrar.addEventListener('click',(idArticle) =>{
    fetch(urlColeccion,{
        method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(data => {console.log(data);})
    .catch(error => console.log(error));


})