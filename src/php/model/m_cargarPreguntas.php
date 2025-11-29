<?php
    require_once __DIR__ .'database/conexion.php';

    class CargarPreguntas extends Conectar{
        
        public function AgregarPreguntas(){
            try {
                $sql="INSERT INTO preguntas(pregunta) VALUES ('".$_POST['pregunta']."')";
                $this->conexion->query($sql);
                return true;
            } catch (PDOException $e) {
                echo $e->getMessage(); #proviional
                return false;
            }
        }
    }
?>