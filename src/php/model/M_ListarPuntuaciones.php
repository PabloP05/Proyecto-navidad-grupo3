<?php

    require_once 'database/conexion2.php';

    class M_ListarPuntuaciones extends Conectar2{

        public function obtenerPuntuaciones(){
            $sql="  SELECT idPartida, puntuacionTotal, usuarios.idusuario, usuarios.nombre
                    FROM partidas INNER JOIN usuarios
                                ON usuarios.idusuario=partidas.idJugador";
            $resultado=$this->conexion->prepare($sql);
            $resultado->execute();
            return $resultado->fetchAll(PDO::FETCH_ASSOC);
        }
    }

?>