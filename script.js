//Botones de ver mas y ver menos
const botonesVerMas = document.querySelectorAll(`.btn-ver-mas`);

function alternarInformacion(event) {
    const boton = event.target;
    
    const infoExtra = boton.previousElementSibling;

    infoExtra.classList.toggle(`oculto`);

    if (infoExtra.classList.contains(`oculto`)) {
        boton.textContent = `[Ver Mas]`;
    } else {
        boton.textContent = `[Ver Menos]`;
    }
}

botonesVerMas.forEach(function(boton){
    boton.addEventListener(`click`, alternarInformacion);
});
//Botones de ver mas y ver menos

//CAMBIAR CONTENIDO DE UN BOTON
const boton = document.getElementById("botonCambiar");
const titulillo = document.getElementById("eslogan");
const frases = [
    "MAS QUE MUSICA UNA IDENTIDAD",
    "HISTORIAS QUE SE HICIERON CANCIONES",
    "UN PAIS, MILES DE VOCES"
];
let indiceFrase = 0;
boton.addEventListener("click", function() {
    indiceFrase = (indiceFrase + 1) % frases.length;
    eslogan.textContent = frases[indiceFrase];
});
//wsgsdgsdgsdgsdg
//CAMBIAR CONTENIDO DE UN BOTON

//VOLVER ARRIBA
const buttom = document.getElementById("volverArribax");
window.addEventListener("scroll", function() {
    if (window.scrollY > 300){
        buttom.style.display = "block";
    } else {
        buttom.style.display = "none";
    }
});
buttom.addEventListener("click", function(){
    window.scrollTo({
     top: 0,
     behavior: "smooth"
    });
});

//DISMINUIR Y AUMENTAR TEXTO
const texto = document.getElementById("textoRock");
const disminuir = document.getElementById("disminuir");
const normal = document.getElementById("normal");
const aumentar = document.getElementById("aumentar");
let tamaño = 16;
aumentar.addEventListener("click", function(){
    if (tamaño < 30){
        tamaño = tamaño + 2;
        texto.style.fontSize = tamaño + "px";
    }    
});

disminuir.addEventListener("click", function(){
    if(tamaño > 10){
     tamaño = tamaño - 2;
     texto.style.fontSize = tamaño + "px";
    }
});    

normal.addEventListener("click", function(){
    tamaño = 16;
    texto.style.fontSize = tamaño + "px"
});
//DISMINUIR Y AUMENTAR TEXTO

//CAROUSEL DE FOTOS
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselContainer = document.getElementById('carousel');

let currentSlide = 0;
let autoSlideInterval;

function showSlide (index) {
    if (slides.length === 0) return;

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach(slide => slide.classList.remove('active'));

    slides[currentSlide].classList.add('active')
}

function nextSLide() {
    showSlide(currentSlide + 1);
}
function prevSlide() {
    showSlide(currentSlide - 1);
}

if (nextBtn) nextBtn.addEventListener('click', nextSLide);
if (prevBtn) prevBtn.addEventListener('click', prevSlide);
//CAROUSEL DE FOTOS
    
