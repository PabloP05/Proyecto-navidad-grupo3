<?php
    require_once 'database/conexion.php';

    class M_modificarSituacion extends Conectar{
        public function obtenerSituacionPorId($idSituacion) {
            $sql = "SELECT * FROM situaciones WHERE idSituacion = :idSituacion";
            $resultado = Conectar::$conexion->prepare($sql);
            $resultado->bindParam(':idSituacion', $idSituacion, PDO::PARAM_INT);
            $resultado->execute();
            return $resultado->fetch(PDO::FETCH_ASSOC);
        }

        // Alias para compatibilidad con controladores que usan el nombre de pregunta
        public function obtenerPreguntaPorId($idSituacion) {
            return $this->obtenerSituacionPorId($idSituacion);
        }

        public function obtenerRespuestas($idSituacion){
            $sqlRespuestas = "SELECT * FROM respuestasSituaciones WHERE idSituacion = :idSituacion";
            $resultadoRespuestas = Conectar::$conexion->prepare($sqlRespuestas);
            $resultadoRespuestas->bindParam(':idSituacion', $idSituacion, PDO::PARAM_INT);
            $resultadoRespuestas->execute();
            return $resultadoRespuestas->fetchAll(PDO::FETCH_ASSOC);
        }

        public function borrarRespuesta($idRespuesta) {
            $sqlBorrar = "DELETE FROM respuestasSituaciones WHERE idRespuestaSituacion = :idRespuesta";
            $resultadoBorrar = Conectar::$conexion->prepare($sqlBorrar);
            $resultadoBorrar->bindParam(':idRespuesta', $idRespuesta, PDO::PARAM_INT);
            $resultadoBorrar->execute();
        }

        // Método principal para modificar situación y sus respuestas
        public function modificarSituacionYrespuesta($idSituacion) {
    // Determinar campo de texto (compatibilidad con vistas que usan 'pregunta' o 'situacion')
    $textoSituacion = $_POST['pregunta'] ?? $_POST['situacion'] ?? null;

    if ($textoSituacion !== null) {
        $sqlModificar = "UPDATE situaciones SET situacion = :situacion WHERE idSituacion = :idSituacion";
        $resultadoModificar = Conectar::$conexion->prepare($sqlModificar);
        $resultadoModificar->bindValue(':situacion', $textoSituacion, PDO::PARAM_STR);
        $resultadoModificar->bindValue(':idSituacion', $idSituacion, PDO::PARAM_INT);
        $resultadoModificar->execute();
    }

    // Modificar las respuestas si vienen en POST
    if (isset($_POST['respuestas']) && is_array($_POST['respuestas'])) {
        foreach ($_POST['respuestas'] as $idRespuesta => $textoRespuesta) {
            $sqlModificarRespuesta = "UPDATE respuestasSituaciones 
                                      SET respuestaSituacion = :respuesta 
                                      WHERE idRespuestaSituacion = :idRespuesta";
            $resultadoModificarRespuesta = Conectar::$conexion->prepare($sqlModificarRespuesta);
            $resultadoModificarRespuesta->bindValue(':respuesta', $textoRespuesta, PDO::PARAM_STR);
            $resultadoModificarRespuesta->bindValue(':idRespuesta', $idRespuesta, PDO::PARAM_INT);
            $resultadoModificarRespuesta->execute();
        }
    }
}

        // Alias compatible con controladores
        public function modificarSituacion($idSituacion) {
            return $this->modificarSituacionYrespuesta($idSituacion);
        }
    }
?>
