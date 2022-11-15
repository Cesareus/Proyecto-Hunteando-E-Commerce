import * as mysql from "../../../node_modules/mysql/index.js"


export class conexion {
     config;   

    constructor() {
        this.config = {
        host: "localhost",
        user: "cesar",
        password: "cesar",
        database: "e_commerce",
        };
    }

    crearConexion() {
        let connection
        return connection = mysql.createConnection(this.config);      
    }
  
}
