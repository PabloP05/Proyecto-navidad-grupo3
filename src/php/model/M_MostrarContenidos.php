<?php

    require_once __DIR__.'/database/conectarPDO.php';

    class M_MostrarContenidos extends Conectar{
        public function obtenerPreguntas(){
            $sql = "SELECT * FROM preguntas";
            $resultado = Conectar::$conexion->prepare($sql);
            $resultado->execute();
            return $resultado->fetchAll(PDO::FETCH_ASSOC);
        }

        public function obtenerSituaciones(){
            $sql = "SELECT * FROM situaciones";
            $resultado = Conectar::$conexion->prepare($sql);
            $resultado->execute();
            return $resultado->fetchAll(PDO::FETCH_ASSOC);
        }

        public function obtenerImagenes(){
            $sql="SELECT * FROM fotos";
            $resultado=Conectar::$conexion->prepare($sql);
            $resultado->execute();
            return $resultado->fetchAll(PDO::FETCH_ASSOC);
        }
    } 

?>