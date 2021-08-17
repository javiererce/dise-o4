/*crear evento para el menu*/

const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-navegacion");
const hamburguer1 = document.querySelector(".hamburguer");
/*------------------*/
hamburguer.addEventListener(`click`,()=>{
menu.classList.toggle("spread")
})

window.addEventListener("click",e=>{
    if(menu.classList.contains("spread") && e.target != menu && e.target!=hamburguer ){
        menu.classList.toggle("spread")   
    }
})
/*crear el lightbox */

const imagenes = document.querySelectorAll(".img-galeria")
const imagenesLight = document.querySelector(".agregar-imagen")
const contenedorLight = document.querySelector(".imagen-light")
/*-----------------*/
imagenes.forEach(imagen=>{
    imagen.addEventListener("click",()=>{
       /* alert("me dolio") */
       aparecerImagen(imagen.getAttribute("src"))
       
    })
})

contenedorLight.addEventListener("click",(e)=>{
    if(e.target !==imagenesLight){
        contenedorLight.classList.toggle("show")
        imagenesLight.classList.toggle("showImagen")
    }
})
const aparecerImagen = (imagen)=>{
       imagenesLight.src = imagen
       contenedorLight.classList.toggle("show")
       imagenesLight.classList.toggle("showImagen")
       hamburguer1.style.opacity ="0.5"
      
}






