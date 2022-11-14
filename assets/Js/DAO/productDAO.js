import { conexion } from "../connection/conexion.js";

export class productDAO {
    conex;
    con;

  constructor() {
    this.conex = new conexion();    
  }

  insertarProducto(dir_imagen, titulo, descripcion, precio) {     
    let cone = this.con;   
    cone = this.conex.crearConexion();
    cone.query(`INSERT INTO productos(dir_imagen, titulo, descripcion, precio)`
    +` VALUES ("${dir_imagen}", "${titulo}", "${descripcion}", "${precio}")`,
      (err) => {
        if (err) throw err;
        console.log("datos insertados");
      }
    );
    cone.end();
  }

  leerProductos() {
    let cone = this.con;
    cone = this.conex.crearConexion();
    cone.query("select * from productos", function (error, results) {
      if (results) {
        console.log(results);        
      } else {
        console.log(error);       
      }
      cone.end();
    });
  }
}
