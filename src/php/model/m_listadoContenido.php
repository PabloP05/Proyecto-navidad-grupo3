<?php
    require_once __DIR__ .'/database/conexion.php';

    class ListarContenido extends Conectar{
        
        public function listarPreguntas(){
            try{
                $sql="SELECT * FROM preguntas";
                $resultado = $this->conexion->query($sql);
                $datos = $resultado->fetchAll(PDO::FETCH_ASSOC);
                return $datos;
            } catch (PDOException $e){
                return false;   
            }
        }

        public function listarSituaciones(){
            try{
                $sql="SELECT * FROM situaciones";
                $resultado = $this->conexion->query($sql);
                $datos = $resultado->fetchAll(PDO::FETCH_ASSOC);
                return $datos;
            } catch (PDOException $e){
                return false;   
            }
        }
        
    }
?>