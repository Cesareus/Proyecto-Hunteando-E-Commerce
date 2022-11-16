import {conexion} from "../connection/conexion.js";

  const conex = new conexion();
  const con  = conex.crearConexion(); 
   
   con.query(
      'INSERT INTO productos(dir_imagen, titulo, descripcion, precio) VALUES ("../../img/main/destacados/image 7.png" ,"Base Notebook","Cooler PAD pim pum pam", 1234)',
      (err) => {
        if (err) throw err;
        console.log("datos insertados");
      }
    );
   
    con.query("select * from productos", function (error, results) {
      if (results) {
        console.log(results);
        con.end();
      } else {
        console.log(error);
        con.end();
      }
    });

