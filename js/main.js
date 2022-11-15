import environment from "./enviroment.js";
const urlColeccion = environment.urlDb + '/articles.json';




// const articles = {
//     cover_image: 'https://www.school-for-champions.com/science/images/static_generating_wimshurst.jpg',
//     title: 'Prueba Kodemia',
//     tags: 'kodemia, alfred, vic, grace, alejandro',
//     parrafo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptates illo asperiores! Reiciendis totam ut neque commodi fugit labore itaque, rem doloremque, ipsa expedita dolor voluptas quod nam ad unde.',    
// };



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