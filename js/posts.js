import environment from "./enviroment.js";
const urlColeccion = environment.urlDb + '/articles.json';

/*======================================================================
GET ELEMENTS FROM DOM
========================================================================*/

const articulos = document.getElementById('articles')

/*======================================================================
FETCH ALL POST FROM FIREBASE
========================================================================*/


fetch(urlColeccion)
    .then((response) => response.json())
    .then((data) => {
    const keys = Object.keys(data);
    // por cada key me tendría que traerme todos los 
        keys.forEach(element => {
        let titulo = data[element].title;
        let parrafo = data[element].parrafo;
        let image = data[element].cover_image;
        let tags = data[element].tags;
        let fecha = data[element].fecha;

    const elementDiv = document.createElement('div');
    elementDiv.classList.add('titulo');

    const postTile = document.createElement('h5');
    postTile.classList.add('articleTitle_id');
    postTile.innerText = titulo;

    const fechaPost = document.createElement('h6');
    fechaPost.classList.add('articlefechaPost_id');
    fechaPost.innerText = fechaPost;
    
    elementDiv.appendChild(articulos);
    postTile.appendChild(elementDiv);
    fechaPost.appendChild(elementDiv);    

    });
  

});