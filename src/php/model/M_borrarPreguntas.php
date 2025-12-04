<?php
require_once 'database/conexion.php';

class M_borrarPreguntas extends Conectar {
    public function borrarPregunta($idPregunta) {
        // Borrar respuestas asociadas a la situación
        $sqlRespuestas = "DELETE FROM respuestasPreguntas WHERE idPregunta = :idPregunta";
        $stmtRespuestas = Conectar::$conexion->prepare($sqlRespuestas);
        $stmtRespuestas->bindParam(':idPregunta', $idPregunta, PDO::PARAM_INT);
        $stmtRespuestas->execute();

        // Borrar la situación
        $sqlSituacion = "DELETE FROM preguntas WHERE idPregunta = :idPregunta";
        $stmtSituacion = Conectar::$conexion->prepare($sqlSituacion);
        $stmtSituacion->bindParam(':idPregunta', $idPregunta, PDO::PARAM_INT);
        $stmtSituacion->execute();
    }
}
?>
