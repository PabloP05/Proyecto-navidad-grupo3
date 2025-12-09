<?php
//require_once __DIR__.'/../../config/configDB.php';

class Conectar {
    public static $conexion;

    public function __construct() {
        try {
            self::$conexion = new PDO(
                'mysql:host='.SERVIDOR.';dbname='.BBDD,
                daw_userbd22,
                CLAVE,
                array(
                    PDO::ATTR_PERSISTENT => true,
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
                )
            );
        } catch (PDOException $e) {
            echo "Error de conexión: " . $e->getMessage();
        }
    }

    public function __destruct() {
        self::$conexion = null;
    }
}
?>
