import * as mysql from "../../../node_modules/mysql/index.js"

export class conexion {
     config;
     connection;

    crearConexion() {
        this.config = {
            host: "localhost",
            user: "cesar",
            password: "cesar",
            database: "e_commerce",
            };
        return this.connection = mysql.createConnection(this.config);      
    }
  
}
