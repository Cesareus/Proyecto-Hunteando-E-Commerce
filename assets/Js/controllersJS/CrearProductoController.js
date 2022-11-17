import { productosServices } from "../servicesJS/services.js";

function guardar(categoria, dir_imagen, titulo, descripcion, precio){
    var array = [categoria, dir_imagen, titulo, descripcion, precio]
    productosServices.ajax("./assets/php/controllersPHP/guardar.php",{"array": array})
    .done(function(info){
        if(info){
            //$("#data_enviada").html(`<h3 class ="text-success">Se han registrado los datos</h3>`);
            // Data enviada es el id de una div, es para agregar el contenido al html si los datos
            // fueron agregados a la base de datos
            // Se debería cargar la página admin y llamar a la función que muestre los datos 
            // en la misma
            console.log("Datos enviados");
            if (window.localStorage) {
  
                // If there is no item as 'reload'
                // in localstorage then create one &
                // reload the page
                if (!localStorage.getItem('reload')) {
                    localStorage['reload'] = true;
                    window.location.reload();
                } else {
  
                    // If there exists a 'reload' item
                    // then clear the 'reload' item in
                    // local storage
                    localStorage.removeItem('reload');
                }
            }
            return;
            // Recarga la página
        }else{
            //$("#data_enviada").html(`<h3 class ="text-success">¡Error!</h3>`);
            console.log("No se han podido registrar los datos");
            return;
        }
    });
}

guardar("Destacados", "./assets/img/main/destacados/image 9.png", "papa", "saracatunga", 1234);