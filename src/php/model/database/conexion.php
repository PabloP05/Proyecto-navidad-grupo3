<?php
    require_once '../../config/config.php';
    class Conectar{
        private $conexion;
        public function __construct() {
            $this->conexion= new PDO('mysql:host=localhost;dbname=test', $user, $pass, array(PDO::ATTR_PERSISTENT => true));
        }

        public function __destruct(){
            $this->conexion = null;
        }
    }
?>