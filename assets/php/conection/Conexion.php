<?php


class Conexion{
	private $host = "sql10.freemysqlhosting.net"; // en pc naty "localhost:3310"
	private $dbname = "e_commerce";
	private $user = "sql10578598";
	private $password = "Gdgh3uqnnh";
	private $conexion = null;

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