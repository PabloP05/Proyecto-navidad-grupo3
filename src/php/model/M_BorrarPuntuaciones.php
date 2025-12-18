<?php

    require_once 'database/conexion2.php';

    class M_BorrarPuntuaciones extends Conectar2{
        public function borrarPuntuaciones($idPartida){
            //Borrar el usuario
            $sqlPartida="DELETE FROM partidas WHERE idPartida=:idPartida";
            $stmtPartida=$this->conexion->prepare($sqlPartida);
            $stmtPartida->bindParam(':idPartida', $idPartida, PDO::PARAM_INT);
            $stmtPartida->execute();
        }
    }
?>
