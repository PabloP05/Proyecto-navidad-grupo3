<?php
require_once __DIR__ . '/../../config/configbd2.php';

class Conectar2
{
    protected $conexion;

    public function __construct()
    {
        
        $dsn = 'mysql:host=' . SERVIDOR . ';dbname=' . BBDD . ';charset=utf8mb4';
        $this->conexion = new PDO($dsn, USUARIO, CLAVE);
        $this->conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public function conectar()
    {
        return $this->conexion;
    }
}
?>