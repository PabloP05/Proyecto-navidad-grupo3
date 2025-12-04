<?php
    require_once 'database/conexion.php';

    class M_modificarPregunta extends Conectar{
        public function obtenerPreguntaPorId($idPregunta) {
            $sql = "SELECT * FROM preguntas WHERE idPregunta = :idPregunta";
            $resultado = Conectar::$conexion->prepare($sql);
            $resultado->bindParam(':idPregunta', $idPregunta);
            $resultado->execute();
            return $resultado->fetch(PDO::FETCH_ASSOC);
        }

        public function obtenerRespuestas($idPregunta){
            $sqlRespuestas = "SELECT * FROM respuestasPreguntas WHERE idPregunta = :idPregunta";
            $resultadoRespuestas = Conectar::$conexion->prepare($sqlRespuestas);
            $resultadoRespuestas->bindParam(':idPregunta', $idPregunta);
            $resultadoRespuestas->execute();
            return $resultadoRespuestas->fetchAll(PDO::FETCH_ASSOC);
        }

        public function borrarRespuesta($idRespuesta) {
            $sqlBorrar = "DELETE FROM respuestasPreguntas WHERE idRespuestaPregunta = :idRespuesta";
            $resultadoBorrar = Conectar::$conexion->prepare($sqlBorrar);
            $resultadoBorrar->bindParam(':idRespuesta', $idRespuesta, PDO::PARAM_INT); //fuerzo que sea un int
            $resultadoBorrar->execute();
        }

        public function modificarPreguntaYrespuesta($idPregunta) {
    // Modificar la pregunta
    $sqlModificarPregunta = "UPDATE preguntas SET pregunta = :pregunta WHERE idPregunta = :idPregunta";
    $resultadoModificarPregunta = Conectar::$conexion->prepare($sqlModificarPregunta);
    $resultadoModificarPregunta->bindParam(':pregunta', $_POST['pregunta']);
    $resultadoModificarPregunta->bindParam(':idPregunta', $idPregunta);
    $resultadoModificarPregunta->execute();

    // Modificar las respuestas
    if (isset($_POST['respuestas'])) {
        foreach ($_POST['respuestas'] as $idRespuesta => $textoRespuesta) {
            $sqlModificarRespuesta = "UPDATE respuestasPreguntas SET respuesta = :respuesta WHERE idRespuestaPregunta = :idRespuesta";
            $resultadoModificarRespuesta = Conectar::$conexion->prepare($sqlModificarRespuesta);
            $resultadoModificarRespuesta->bindParam(':respuesta', $textoRespuesta);
            $resultadoModificarRespuesta->bindParam(':idRespuesta', $idRespuesta, PDO::PARAM_INT);
            $resultadoModificarRespuesta->execute();
        }
    }
}


    }
?>