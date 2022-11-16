const cargaImagen   =   document.getElementById("createImage__post");
const prevImagen    =   document.querySelectorAll("#imagePrev");

cargaImagen.addEventListener("change",() => {
    console.log("prepara imagen");
    const archivoImg = cargaImagen.files;
    if(!archivoImg || !archivoImg.length){
        prevImagen.src = "";
        return;
    }
    const archUno = archivoImg[0];
    const objectURL = URL.createObjectURL(archUno);
    prevImagen.src = objectURL;
})



