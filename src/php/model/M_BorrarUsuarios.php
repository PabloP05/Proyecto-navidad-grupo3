<?php

    require_once 'database/conexion2.php';

    class M_BorrarUsuarios extends Conectar2{
        public function borrarUsuario($idUsuario){
            //Borrar el usuario
            $sqlUsuario="DELETE FROM usuarios WHERE idusuario=:idUsuario";
            
            try{
                $stmtUsuario=$this->conexion->prepare($sqlUsuario);
                $stmtUsuario->bindParam(':idUsuario', $idUsuario, PDO::PARAM_INT);
                $stmtUsuario->execute();

                return true;
            }catch(PDOException $e){
                return false;
            }
        }
    }
?>
