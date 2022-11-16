const db = 'https://kodemiadevto-default-rtdb.firebaseio.com/articles';


const params = new URLSearchParams(document.location.search);
const articleId = params.get('id');

const formEditAndDelete   = document.getElementById('article-form');

const titleInput = document.getElementById('createInput__text');
const titleParrafo = document.getElementById('createInput__text-p');
const titleImage = document.getElementById('createInput__img');

const borrar = document.getElementById('article_main__createPost-delete');
const edit = document.getElementById("article_main__createPost-edit");



fetch(`${db}/${articleId}.json`)
    .then((res) => res.json())
    .then((data) => {
        titleImage.value = data.cover_image;
        titleInput.value = data.title;
        titleParrafo.innerText = data.parrafo;
    }); 



borrar.addEventListener('click', (e) =>{
        e.preventDefault();
        fetch(`${db}/${articleId}.json`, {
            method: 'DELETE',
        })
        .then(resp => resp.json())
        .then(data => {console.log(data);})
        .catch(error => console.log(error));
    
    
})


console.log(edit, 'CLG ERROR');

edit.addEventListener('click', (e) =>{
    e.preventDefault();

    const titleImg      = titleImage.value;
    const titlePost     = titleInput.value;
    const contenidoPost = titleParrafo.value;
    
    const datosPost = {
        title       : titlePost,
        parrafo     : contenidoPost,
        cover_image      : titleImg
    }

    fetch(`${db}/${articleId}.json`, {
        method: 'PUT',
        body: JSON.stringify(datosPost),
        headers: {
        'Content-Type': 'application/json'
        }})
    .then(resp => resp.json())
    .then(data => {console.log(data);})
    .catch(error => console.log(error))
    })