<?php

    require_once 'database/conexion2.php';

    class M_ListarUsuarios extends Conectar2{

        public function obtenerUsuarios(){
            $sql="SELECT * FROM usuarios";
            $resultado=$this->conexion->prepare($sql);
            $resultado->execute();
            return $resultado->fetchAll(PDO::FETCH_ASSOC);
        }
    }

?>