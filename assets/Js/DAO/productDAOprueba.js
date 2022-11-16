var config = require('../connection/connectionprueba.js');

var connection= config.connection;

connection.query('INSERT INTO productos(dir_imagen, titulo, descripcion, precio) VALUES ("../../img/main/destacados/image 7.png" ,"Base Notebook","Cooler PAD pim pum pam", 1234)', (err) =>{
  if(err) throw err
  console.log('datos insertados');    
});

connection.query ('select * from productos', function(error, results){
   if (results){
     console.log(results);
     connection.end();
   }
   else{
     console.log(error);
     connection.end();
   }   
});

