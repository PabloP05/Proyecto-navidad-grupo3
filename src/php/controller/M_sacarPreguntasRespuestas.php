<?php
require_once 'database/conexion.php';

class M_sacarPreguntasRespuestas extends Conectar {

    public function obtenerPreguntasRespuestas() {
        $pdo = Conectar::$conexion; // devuelve instancia PDO

       $sql = "
        SELECT p.idPregunta,
               p.pregunta,
               r.respuesta
        FROM preguntas p
        INNER JOIN respuestasPreguntas r 
        ON r.idPregunta = p.idPregunta
        ORDER BY p.idPregunta
    ";

    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Agrupar por pregunta
    $preguntas = [];
    foreach ($rows as $row) {
        $id = $row['idPregunta'];

        if (!isset($preguntas[$id])) {
            $preguntas[$id] = [
                'idPregunta' => $id,
                'pregunta'   => $row['pregunta'],
                'respuestas' => []
            ];
        }

        $preguntas[$id]['respuestas'][] = $row['respuesta'];
    }

    // Reindexar para que sea un array numérico
    return ['preguntas' => array_values($preguntas)];
}}