<?php
	$file = file_get_contents("config.json",true); #recupero la informacion del config.json
	$config = json_decode($file,true); #se decodifica para asignarlo a las variables

	
	class Conexion{
<<<<<<< HEAD
		private $host;  // en pc naty "localhost:3310"
		private $dbname;
		private $user;
		private $password;
=======
		private $host = "localhost:3310"; // en pc naty "localhost:3310"
		private $dbname = "e_commerce";
		private $user = "cesar";
		private $password = "cesar";
>>>>>>> origin/front
		private $conexion = null;

		public function __construct()
		{
			$this->host=$GLOBALS["config"["host"]];
			$this->dbname=$GLOBALS["config"["db_name"]];
			$this->user=$GLOBALS["config"["username"]];
			$this->password=$GLOBALS["config"["password"]];
		}
		public function getConexion(){
			try{
				$this->conexion = new PDO(
									"mysql:host=$this->host; dbname=$this->dbname",
									$this->user,
									$this->password
									);
			return $this->conexion;
			}catch(Exception $e){
				echo $e->getMessage();
			}finally{
				$this->conexion = null;
				
			}
		}
	}