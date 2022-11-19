import { productosServices } from "../servicesJS/services.js";
/* console.log("IndexLeerProductos ejecutado"); */

const nuevoProducto = (titulo, precio, dir_imagen, clase) => {
  /* console.log("nuevoProductos ejecutado"); */
  const tarjeta = document.createElement("div");
  const contenido = ` 
  <img src="${dir_imagen}" alt="" onerror="imgErrorHTML(this)" class="${clase.claseImg} cardImg" /> 
  <div class="${clase.claseDiv} cardDBox">
    <span class="${clase.claseDescrip} cardDescripcion">${titulo}</span>
    <span class="${clase.ClasePrecio} cardPrecio">${precio}</span>
  </div>
`;
  tarjeta.innerHTML = contenido;
  tarjeta.classList.add(clase.claseCard);
  tarjeta.classList.add("card");
  return tarjeta;
};

var productos;
var clase;


const render = () => {
  /* console.log("listarProductos ejecutado"); */
  try {    
      productosServices.ajax("https://agile-meadow-55328.herokuapp.com/http://c1392137.ferozo.com/assets/php/controllersPHP/listar.php", "").done(function (info) {
        //console.log(info);
        var lista = JSON.parse(info);
        var listaProductos =lista.data;

        listaProductos.forEach((elemento) => {
          if (elemento.categoria == "Destacados") {
            console.log(elemento.categoria);
            productos = document.querySelector("[mainDestacadosP]");
            clase ={
              claseCard:"mainDestacados__contenedor--card",
              claseImg:"mainDestacados__contenedor--cardImg",
              claseDiv:"mainDestacados__contenedor--cardDescripcionBox",
              claseDescrip:"mainDestacados__contenedor--cardDescripcion",
              ClasePrecio:"mainDestacados__contenedor--cardPrecio"
            };
          } else if (elemento.categoria == "Potencia") {
            console.log(elemento.categoria);
            //console.log("if potencia ejecutado")
            productos = document.querySelector("[mainPotenciatpP]");
            clase ={
              claseCard:"mainPotenciatp__contenedor--card",
              claseImg:"mainPotenciatp__contenedor--cardImg",
              claseDiv:"mainDestacados__contenedor--cardDescripcionBox",
              claseDescrip:"mainPotenciatp__contenedor--cardDescripcion",
              ClasePrecio:"mainPotenciatp__contenedor--cardPrecio"
            };
          } else {
            console.log("Categoría inexistente");
          }
          productos.appendChild(
            nuevoProducto(elemento.titulo, elemento.precio, elemento.dir_imagen, clase)
          );
        });
      });    
  } catch (error) {
    console.log(error);
  }
};

render();
