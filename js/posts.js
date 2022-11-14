import environment from "./enviroment.js";
const urlColeccion = environment.urlDb + '/articles.json';

/*======================================================================
GET ELEMENTS FROM DOM
========================================================================*/

articulos = document.getElementById('articles')

/*======================================================================
FETCH ALL POST FROM FIREBASE
========================================================================*/

fetch(urlColeccion)
    .then((response) => response.json())
    .then((data) => {
    const keys = Object.keys(data);

    keys.forEach(element => {
    let titulo  = data[element].title;
    let parrafo = data[element].parrafo;
    let image   = data[element].cover_image;
    let tags    = data[element].tags;
    let fecha   = data[element].fecha;

/*======================================================================
AQUI INICIAN TODAS LAS CARDS
========================================================================*/

    let element         = document.createElement("div");
    element.className   = 'devArticle';
    
    let title           = document.createElement('h5');
    title.id            = 'titulo_articulo';
    title.textContent   = data[element].title;

    let fecha           = document.createElement('h6');
    fecha.id            = 'fecha_articulo';
    fecha.textContent   = data[element].fecha;

    });

});