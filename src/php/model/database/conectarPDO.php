<?php

    require_once __DIR__."/../../config/configBD.php";

    class Conectar{
        public static $conexion;

        public function __construct() {
            try{
                self::$conexion = new PDO(
                    'mysql:host='.SERVIDOR.';dbname='.BBDD,
                    USUARIO,
                    CLAVE,
                    array(
                        PDO::ATTR_PERSISTENT => true,
                        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
                    )
                );
            }catch (PDOException $e){
                echo "Error de conexión: ".$e->getMessage();
            }
        }

        public function __destruct(){
            self::$conexion=null;
        }
    }

?>
