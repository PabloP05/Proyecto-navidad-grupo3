<?php
    require_once 'database/conexion.php';
    class M_listarContenido extends Conectar {
        public  function obtenerPreguntas() {
            $sql = "SELECT * FROM preguntas";
            $resultado = Conectar::$conexion->prepare($sql);
            $resultado->execute();
            return $resultado->fetchAll(PDO::FETCH_ASSOC);
        }

        public function obtenerSituaciones() {
            $sql = "SELECT * FROM situaciones";
            $resultado = Conectar::$conexion->prepare($sql);
            $resultado->execute();
            return $resultado->fetchAll(PDO::FETCH_ASSOC);
        }
    }   
?>