"use strict"

window.addEventListener('load', (event) => {

    console.log('page is fully loaded');

    /* Cuando hago CLICK .button, .nav TOGGLE 'activo' */

    var button = document.querySelector('.header__Menu-Button');
    var nav = document.querySelector('.header__MenuNav');

    button.addEventListener('click', () => {
        console.log('activo');
        nav.classList.toggle('activo')
    });


});