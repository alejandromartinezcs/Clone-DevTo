import environment from "./enviroment.js";
const urlColeccion = environment.urlDb + '/articles.json';

// Variables para la obtención de los datos que se mandarán a Firebase para crear los articulos

// createImage__post
// createInput__text
// createInput__text-p

const cover_image = document.getElementById('createImage__post');
const title = document.getElementById('createInput__text');
const tags = document.getElementById('createInput__text-tags');
const parrafo = document.getElementById('createInput__text-p');


const articles = {
    cover_image: cover_image.value,
    title: title.value,
    tags: tags.value,
    parrafo: parrafo.value,    
};



fetch(urlColeccion, {
    method: 'POST',
    body: JSON.stringify(articles),
    headers: {
        'Content-Type': 'application/json'
    }
})

    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));


console.log(environment);