"use strict"

window.addEventListener('load', (event) => {

    console.log('page is fully loaded');

    /* Cuando hago CLICK .button, .nav TOGGLE 'activo' */

    var button = document.querySelector('.button');
    var nav = document.querySelector('.nav');

    button.addEventListener('click', () => {
        console.log('activo');
        nav.classList.toggle('activo')
    });


});