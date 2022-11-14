
import environment from "./enviroment.js";
const urlColeccion = environment.urlDb + '/articles.json';

fetch('https://kodemiadevto-default-rtdb.firebaseio.com/articles.json')
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


});

});