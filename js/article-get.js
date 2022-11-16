import environment from "./environment.js";
const urlColeccion = environment.urlDb + '/articles.json';

const divarticle    = document.getElementById('container-article');



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
            console.log(titulo);
            console.log(parrafo);
            console.log(fecha);
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