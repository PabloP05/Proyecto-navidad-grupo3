<?php
    require_once __DIR__.'/../../config/config.php';
    class Conectar{
        protected $conexion;
        public function __construct() {
            $this->conexion = new PDO(
                'mysql:host='.SERVIDOR.';dbname='.BBDD,
                USUARIO,
                CLAVE,
                array(PDO::ATTR_PERSISTENT => true, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION) //activa los errores de PDO
            );

        }

        public function __destruct(){
            $this->conexion = null;
        }
    }
?>