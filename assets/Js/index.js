import { productDAO } from "./DAO/productDAO.js";

const con = new productDAO();

con.insertarProducto("../img/main/destacados/image 7.png", "cangrejo", "cachafas", 1234);

con.leerProductos();