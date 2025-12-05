
<?php
    require_once 'database/conexion.php';
    class M_borrarSituacion extends Conectar {
        public function borrarSituacion($idSituacion) {
            // Borrar respuestas asociadas a la situación
            $sqlRespuestas = "DELETE FROM respuestasSituaciones WHERE idSituacion = :idSituacion";
            $stmtRespuestas = Conectar::$conexion->prepare($sqlRespuestas);
            $stmtRespuestas->bindParam(':idSituacion', $idSituacion);
            $stmtRespuestas->execute();

            // Borrar la situación
            $sqlSituacion = "DELETE FROM situaciones WHERE idSituacion = :idSituacion";
            $stmtSituacion = Conectar::$conexion->prepare($sqlSituacion);
            $stmtSituacion->bindParam(':idSituacion', $idSituacion);
            $stmtSituacion->execute();
        }
    }
?>