<?php
require_once 'database/conexion.php';

class M_sacarSituacionesRespuestas extends Conectar {

    public function obtenerSituacionesRespuestas() {
        $pdo = Conectar::$conexion; // instancia PDO

        $sql = "
            SELECT s.idSituacion,
                   s.situacion,
                   r.respuestaSituacion,
                   r.correcta
            FROM situaciones as s
            INNER JOIN respuestasSituaciones as r 
            ON r.idSituacion = s.idSituacion
            ORDER BY s.idSituacion
        ";

        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Agrupar por situación
        $situaciones = [];
        foreach ($rows as $row) {
            $id = $row['idSituacion'];
            //verifico que el id de la situacion no exista (eso es que no está en el array )
            if (!isset($situaciones[$id])) {
                //lo genero como parte del array 
                $situaciones[$id] = [
                    'idSituacion' => $id,
                    'situacion' => $row['situacion'],
                    'respuestas' => []
                ];
            }
            //cargo sus respuestas con el estado (correcto o no)
            $situaciones[$id]['respuestas'][] = [
                'respuestaSituacion' => $row['respuestaSituacion'],
                'correcta' => (bool)$row['correcta'] // hago un casteo a tipo boleano para forzar el dato 
            ];
        }

        // Reindexar para que sea un array numérico limpio
        return ['situaciones' => array_values($situaciones)];
    }
}
