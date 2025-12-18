<?php

	require_once "config/configBD.php";

	class Conectar{
		
		protected $conexion;
		
		public function __construct(){
			$this->crear();
		}
		
		public function __destruct(){
			if($this->conexion){
				$this->conexion->close();
			}
		}
		
		private function crear(){
			$this->conexion=new mysqli(SERVIDOR,USUARIO,CLAVE,BBDD);
		}
	}

?>