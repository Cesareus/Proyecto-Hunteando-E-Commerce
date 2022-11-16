let thumbnailsarriba = document.querySelectorAll('.mainDestacados__contenedor--card');
let thumbnailsabajo = document.querySelectorAll('.mainPotenciatp__contenedor--card');
let slider = document.getElementById('contenedor__productos');
let slider1 = document.getElementById('contenedor__potencia');

let buttonDestacadosLeft = document.getElementById('bt__sliderLeft-destacados');
let buttonDestacadosRight = document.getElementById('bt__sliderRight-destacados');
let buttonPotenciaRight = document.getElementById('bt__sliderRigth-potencia');
let buttonPotenciaLeft = document.getElementById('bt__sliderLeft-potencia');


buttonDestacadosLeft.addEventListener('click', function(){
    slider.scrollLeft -= 125;
    console.log("boton left clickeado");
})

buttonDestacadosRight.addEventListener('click', function(){
    slider.scrollLeft += 125;
    console.log("boton rigth clickeado");
})

buttonPotenciaLeft.addEventListener('click', function(){
    slider1.scrollLeft -= 125;
    console.log("boton left clickeado");
})

buttonPotenciaRight.addEventListener('click', function(){
    slider1.scrollLeft += 125;
    console.log("boton rigth clickeado");
})


const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
const maxScrollLeft1 = slider1.scrollWidth - slider1.clientWidth;
//alert(maxScrollLeft);
//alert("Left Scroll:" + slider.scrollLeft);

//AUTO PLAY THE SLIDER 
function autoPlayarriba() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}

function autoPlayabajo(){
    if (slider1.scrollLeft > (maxScrollLeft1 - 1)) {
        slider1.scrollLeft -= maxScrollLeft1;
    } else {
        slider1.scrollLeft += 1;
    }
}


let play = setInterval(autoPlayarriba, 50);
let play1 = setInterval(autoPlayabajo,50);


// PAUSE THE SLIDE ON HOVER
for (var i=0; i < thumbnailsarriba.length; i++){

    thumbnailsarriba[i].addEventListener('mouseover', function() {
    clearInterval(play);
});

    thumbnailsarriba[i].addEventListener('mouseout', function() {
    return play = setInterval(autoPlayarriba, 50);
});
}

for (var i=0; i < thumbnailsabajo.length; i++){

    thumbnailsabajo[i].addEventListener('mouseover', function() {
        clearInterval(play1);
    });
    
    thumbnailsabajo[i].addEventListener('mouseout', function() {
        return play1 = setInterval(autoPlayabajo, 50);
    });
}