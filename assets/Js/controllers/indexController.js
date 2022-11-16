import {productDAO} from "../DAO/productDAO.js";

const Productosclass = new productDAO();

const nuevoProducto = (nombre, precio, dir_imagen) =>{

  const tarjeta = document.createElement("div");
  const contenido =` 
  <img src="${dir_imagen}" alt="" onerror="imgErrorHTML(this)" class="mainDestacados__contenedor--cardImg cardImg" /> 
  <div class="mainDestacados__contenedor--cardDescripcionBox cardDBox">
    <span class="mainDestacados__contenedor--cardDescripcion cardDescripcion">${nombre}</span>
    <span class="mainDestacados__contenedor--cardPrecio cardPrecio">${precio}</span>
  </div>
`
  tarjeta.innerHTML = contenido;
  tarjeta.classList.add("mainDestacados__contenedor--card card");
  return tarjeta;
};

var productos;

const render = async () =>{
  try {
    
    const listaProductos = await Productosclass.leerProductos();
    console.log(listaProductos);
    listaProductos.forEach(elemento => {      
        if(elemento.categoria == "Destacados"){
          productos = document.querySelector("[mainDestacadosP]");
        }else if(elemento.categoria == "Potencia"){
          productos = document.querySelector("[mainPotenciatpP]");
        }else{
          console.log("Categoría inexistente")
        }      
      productos.appendChild(nuevoProducto(elemento.nombre, elemento.precio, elemento.dir_imagen));
    });

  } catch (error) {
    console.log(error);
  }
}

render();