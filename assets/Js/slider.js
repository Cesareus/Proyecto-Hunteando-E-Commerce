let thumbnails = document.querySelectorAll('.card');
let slider = document.getElementById('contenedor__productos');
let slider1 = document.getElementById('contenedor__potencia');

let buttonDestacadosLeft = document.getElementById('bt__sliderLeft-destacados');
let buttonDestacadosRight = document.getElementById('bt__sliderRight-destacados');
let buttonPotenciaRight = document.getElementById('bt__sliderRigth-potencia');
let buttonPotenciaLeft = document.getElementById('bt__sliderLeft-potencia');


buttonDestacadosLeft.addEventListener('click', function(){
    slider.scrollLeft -= 125;
    console.log("boton left clickeado", thumbnails.length);
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
//alert(maxScrollLeft);
//alert("Left Scroll:" + slider.scrollLeft);

//AUTO PLAY THE SLIDER 
function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}
let play = setInterval(autoPlay, 50);

// PAUSE THE SLIDE ON HOVER
for (var i=0; i < thumbnails.length; i++){

thumbnails[i].addEventListener('mouseover', function() {
    clearInterval(play);
});

thumbnails[i].addEventListener('mouseout', function() {
    return play = setInterval(autoPlay, 50);
});
}